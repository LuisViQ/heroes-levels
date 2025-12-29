import { createContext, useState, type ReactNode } from "react";

import getSingleItem from "../services/getSingleItem";

type SingleProduct = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  stock: number;
};

interface SingleProductsContextProps {
  product: SingleProduct | null;
  isLoading: boolean;
  error: string | null;
  loadProduct: (id: number) => Promise<void>;
}

type SingleProductsContextProviderProps = {
  children: ReactNode;
};

export const SingleProductsContext =
  createContext<SingleProductsContextProps | null>(null);

export default function SingleProductsContextProvider({
  children,
}: SingleProductsContextProviderProps) {
  const [product, setProduct] = useState<SingleProduct | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadProduct = async (id: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const item = await getSingleItem(id);
      setProduct(item);
    } catch (e: any) {
      setError(e?.message ?? "Falha ao carregar produtos");
    } finally {
      setIsLoading(false);
    }
  };

  const contextValue: SingleProductsContextProps = {
    product,
    isLoading,
    error,
    loadProduct,
  };

  return (
    <SingleProductsContext.Provider value={contextValue}>
      {children}
    </SingleProductsContext.Provider>
  );
}
