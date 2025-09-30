import React from 'react'

function Button({children}) {
  return (
    <div>
      <button className='bg-amber-400 p-3 text-white font-bold'>{children}</button>
    </div>
  )
}

export default Button
