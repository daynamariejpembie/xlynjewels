"use client"

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
    const [ cart, setCart] = useState([]);

    // Add to cart
    const addToCart = (product) => {
        setCart((prevCart) => {
          const existingItem = prevCart.find(item => item.id === product.id);

          if (existingItem) {
            return prevCart.map(item =>
              item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
            );
          }

          return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // Remove item
    const removeFromCart = (id) => {
      setCart(prev => prev.filter(item => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, amount) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // Persist Cart
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        setCart(JSON.parse(savedCart))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
        {children}
    </CartContext.Provider>
  );

}

export const useCart = () => useContext(CartContext);