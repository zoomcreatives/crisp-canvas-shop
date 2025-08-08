import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";

export type WishlistItem = {
  id: string; // product id
  productId: string;
  title: string;
  price: number;
  image: string;
};

type WishlistContextType = {
  items: WishlistItem[];
  count: number;
  isWished: (productId: string) => boolean;
  toggle: (product: Product) => void;
  remove: (productId: string) => void;
  clear: () => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<WishlistItem[]>(() => {
    const raw = localStorage.getItem("wishlist:v1");
    return raw ? (JSON.parse(raw) as WishlistItem[]) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist:v1", JSON.stringify(items));
  }, [items]);

  const isWished = (productId: string) => items.some((i) => i.productId === productId);

  const toggle: WishlistContextType["toggle"] = (product) => {
    setItems((prev) => {
      const exists = prev.some((i) => i.productId === product.id);
      if (exists) return prev.filter((i) => i.productId !== product.id);
      return [
        {
          id: product.id,
          productId: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        },
        ...prev,
      ];
    });
  };

  const remove = (productId: string) => setItems((prev) => prev.filter((i) => i.productId !== productId));
  const clear = () => setItems([]);
  const count = useMemo(() => items.length, [items]);

  const value: WishlistContextType = { items, count, isWished, toggle, remove, clear };
  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
};
