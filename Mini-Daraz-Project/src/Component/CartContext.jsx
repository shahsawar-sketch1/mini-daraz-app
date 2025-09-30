import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add to Cart
  function addToCart(product) {
    setCart([...cart, product]);
  }

  // Remove from Cart
  function removeFromCart(id) {
    setCart(cart.filter((item, index) => index !== id)); 
    // 👆 index ke basis pe remove kar rahe hain
   
  }
   function clearCart(){
      setCart([])
    }

  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice ,clearCart}}>
      {children}
    </CartContext.Provider>
  );
}


