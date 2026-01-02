import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  addCartItem,
  clearCart as clearCartRequest,
  getCart,
  removeCartItem,
  updateCartItemQuantity,
  type CartResponse,
} from "../services/cart";
import { LoginContext } from "./loginContext";

export type CartItem = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  quantity: number;
};

export type AddableItem = Omit<CartItem, "quantity">;

type CartContextProps = {
  items: CartItem[];
  isReady: boolean; // true when cart is loaded
  addItem: (item: AddableItem, qty?: number) => void;
  decreaseItem: (id: number, qty?: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  total: number;
  itemsCount: number;
};

const CartContext = createContext<CartContextProps | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isReady, setIsReady] = useState(false);
  const loginContext = useContext(LoginContext);
  const userId = loginContext?.userId ?? 0;
  const token = loginContext?.token ?? "";

  const applyCart = (cart?: CartResponse) => {
    if (!cart) return;
    const safeItems = (cart.items ?? []).map((item) => ({
      ...item,
      thumbnail:
        item.thumbnail ??
        `https://picsum.photos/seed/${item.id ?? "item"}/600/600`,
    }));
    setItems(safeItems);
  };

  const syncCart = async (action: Promise<CartResponse>) => {
    try {
      const cart = await action;
      applyCart(cart);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Falha ao atualizar carrinho";
      console.log(message);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadCart = async () => {
      if (!userId) {
        if (isMounted) {
          setItems([]);
          setIsReady(true);
        }
        return;
      }

      if (isMounted) {
        setIsReady(false);
      }

      try {
        const cart = await getCart(userId, token);
        if (isMounted) {
          applyCart(cart);
        }
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Falha ao carregar carrinho";
        console.log(message);
        if (isMounted) {
          setItems([]);
        }
      } finally {
        if (isMounted) {
          setIsReady(true);
        }
      }
    };

    loadCart();

    return () => {
      isMounted = false;
    };
  }, [userId, token]);

  const addItem = (item: AddableItem, qty: number = 1) => {
    const q = qty < 1 ? 1 : qty;
    if (!userId) return;
    void syncCart(addCartItem(userId, item.id, q, token));
  };

  const decreaseItem = (id: number, qty: number = 1) => {
    const q = qty < 1 ? 1 : qty;
    if (!userId) return;

    const current = items.find((item) => item.id === id);
    const nextQuantity = (current?.quantity ?? 0) - q;

    if (nextQuantity <= 0) {
      void syncCart(removeCartItem(userId, id, token));
    } else {
      void syncCart(updateCartItemQuantity(userId, id, nextQuantity, token));
    }
  };

  const removeItem = (id: number) => {
    if (!userId) return;
    void syncCart(removeCartItem(userId, id, token));
  };

  const clearCart = () => {
    if (!userId) {
      setItems([]);
      return;
    }
    void syncCart(clearCartRequest(userId, token));
  };

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const itemsCount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const value: CartContextProps = {
    items,
    isReady,
    addItem,
    decreaseItem,
    removeItem,
    clearCart,
    total,
    itemsCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de <CartProvider>");
  return ctx;
}
