import { createContext, useEffect, useState, type ReactNode } from "react";

import getItem from "../services/getItem";

type Product = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
};

interface ProductsContextProps {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  reload: () => Promise<void>;
}

type ProductsContextProviderProps = {
  children: ReactNode;
};

export const ProductsContext = createContext<ProductsContextProps | null>(null);

export default function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = async (force: boolean = false) => {
    if (isLoading && !force) return;

    setIsLoading(true);
    setError(null);
    try {
      const list = await getItem({ force });
      setProducts(list);
    } catch (e: any) {
      setError(e?.message ?? "Falha ao carregar produtos");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const contextValue: ProductsContextProps = {
    products,
    isLoading,
    error,
    reload: () => loadProducts(true),
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}
