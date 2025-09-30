import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import CartPage from "./CartPage";
import Modal from "./Modal";

function CartModal({ isOpen, onClose }) {
  const { cart, removeFromCart } = useContext(CartContext);
 

  if (!isOpen) return null;
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm roll scroll-m-4">
      <div className="
          bg-white p-6 rounded-xl shadow-lg w-[400px]
          transform transition-all duration-300 ease-out
          animate-slideUp
          max-h-[80vh] overflow-y-auto
        ">
        
        {/* Yahan pura CartPage ka UI aa jayega */}
        <CartPage cart={cart} removeFromCart={removeFromCart}  />
      <div className="flex justify-between">
        <button
          onClick={onClose}
          className="mt-4 bg-gray-700 text-white px-4 py-2 rounded font-semibold text-xl"
        >
          Close
        </button>
        <Modal/>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
