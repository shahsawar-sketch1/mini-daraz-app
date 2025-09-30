import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function CartPage({onClose}) {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);
      //  if(!onClose) return null
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between border-b pb-2 items-center">
                <span>{item.name} - ${item.price}</span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-xl font-bold">
            Total: <span className="text-green-600">${totalPrice}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
