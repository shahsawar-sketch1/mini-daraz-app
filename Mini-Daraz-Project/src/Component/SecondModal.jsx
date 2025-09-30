import React from 'react'

function SecondModal() {
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm roll scroll-m-4">
      <div className="
          bg-white p-6 rounded-xl shadow-lg w-[400px]
          transform transition-all duration-300 ease-out
          animate-slideUp
          max-h-[80vh] overflow-y-auto
        ">
        
        {/* Yahan pura CartPage ka UI aa jayega */}
        
      <div className="flex justify-between">
        <button
          onClick={onClose}
          className="mt-4 bg-gray-700 text-white px-4 py-2 rounded font-semibold text-xl"
        >
          Close
        </button>
        
        </div>
      </div>
    </div>
  )
}

export default SecondModal
