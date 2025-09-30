import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
// import { CheckCircle } from "lucide-react";
import CartModal from "./CardModal";
import { useNavigate} from 'react-router-dom'
function Modal() {
  const { cart,clearCart } = useContext(CartContext);
  const [showSuccess, setShowSuccess] = useState(false);
 

  function handleOrder() {
    setShowSuccess(true);
    clearCart()
    
    
    setTimeout(() => {
      setShowSuccess(false);
      
    }, 3000);
  }
 
  return (
    <>
      {cart.length >= 1 ? (
        <button
          onClick={handleOrder}
          className="mt-4 bg-green-700 text-white px-4 py-2 rounded font-semibold text-xl"
        >
          Order
        </button>
      ) : null}

      {/* ✅ Tick Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 ">
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center w-[400px] h-[300px] justify-center ">
            {/* <CheckCircle className="text-green-500 w-16 h-16" /> */}
            <p className="mt-2 text-2xl font-semibold text-gray-700">
              Order Placed! ✅ 
            </p>
          </div>
        </div>
      )}
         
    </>
  );
}

export default Modal;
