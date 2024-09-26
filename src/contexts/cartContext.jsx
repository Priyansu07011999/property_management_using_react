import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (property) => {
    const existingBooking = cart.find((item) => item.id === property.id);
    const addedAt = new Date().toLocaleString(); 
    if (existingBooking) {
      setCart(cart.map((item) =>
        item.id === property.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...property, quantity: 1, addedAt }]); 
    }
  };

  const removeFromCart = (propertyId) => {
    setCart(cart.filter((item) => item.id !== propertyId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (propertyId, amount) => {
    setCart(cart.map(item =>
      item.id === propertyId
        ? { ...item, quantity: Math.max(1, item.quantity + amount) } 
        : item
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
