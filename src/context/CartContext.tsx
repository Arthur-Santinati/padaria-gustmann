"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem, PriceUnit } from "@/config/menu";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  image: string;
  priceUnit: PriceUnit;
  quantityUnit: PriceUnit;
  step: number;
  minQuantity: number;
}

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addItem: (item: MenuItem, customQuantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  getItemQuantity: (id: string) => number;
  getItemUnit: (id: string) => PriceUnit | undefined;
  totalLines: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser utilizado dentro de um CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Carrega itens do localStorage ao iniciar
  useEffect(() => {
    try {
      const saved = localStorage.getItem("gustmann-cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Não foi possível carregar o carrinho do localStorage:", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Salva no localStorage a cada alteração
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("gustmann-cart", JSON.stringify(items));
      } catch (e) {
        console.warn("Não foi possível salvar o carrinho no localStorage:", e);
      }
    }
  }, [items, isLoaded]);

  const addItem = (item: MenuItem, customQuantity?: number) => {
    // Se o item não possui preço numérico, não pode ser somado ao carrinho diretamente
    if (item.price === null) return;

    const step = item.step || (item.quantityUnit === "KG" ? 0.5 : 1);
    const minQty = item.minQuantity || (item.quantityUnit === "KG" ? 1.0 : 1);
    const initialQty = customQuantity ?? minQty;

    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        const nextQty = Math.round((existing.quantity + step) * 10) / 10;
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: nextQty } : i
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price as number,
          quantity: initialQty,
          category: item.category,
          image: item.image,
          priceUnit: item.priceUnit,
          quantityUnit: item.quantityUnit,
          step,
          minQuantity: minQty,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((i) => {
          if (i.id === id) {
            const nextQty = Math.round((i.quantity + delta) * 10) / 10;
            return nextQty > 0 ? { ...i, quantity: nextQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => setItems([]);

  const getItemQuantity = (id: string): number => {
    const item = items.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const getItemUnit = (id: string): PriceUnit | undefined => {
    const item = items.find((i) => i.id === id);
    return item?.quantityUnit;
  };

  // Quantidade de tipos de produtos no carrinho
  const totalLines = items.length;

  // Valor total seguro com 2 casas decimais
  const totalPrice = items.reduce((sum, item) => {
    const itemTotal = Math.round(item.price * item.quantity * 100) / 100;
    return sum + itemTotal;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        setIsCartOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getItemQuantity,
        getItemUnit,
        totalLines,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
