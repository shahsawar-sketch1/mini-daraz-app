import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import CartModal from "./CardModal";

function Header() {
  const { cart } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);
  
      // if(!openModal) return null
  return (
    <div className="flex justify-around bg-gray-600 p-4">
      <h1 className="text-4xl font-bold text-green-400">Mini Daraz App</h1>

      <button
        onClick={() => setOpenModal(true)}
        className="bg-red-600 p-2 text-white rounded font-bold"
      >
        Your Cart {cart.length}
      </button>

      {/* Cart Modal with CartPage inside */}
      <CartModal isOpen={openModal} onClose={() => setOpenModal(false)} />
        
    </div>
  );
}

export default Header;
