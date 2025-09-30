import React,{useContext, useState} from 'react'
import {CartContext} from './CartContext'

function Home() {
  const {addToCart} = useContext(CartContext)
   const Product = [
    {id:"1" ,name:'Cheeze burger', img:'https://media.istockphoto.com/id/1438143625/photo/double-cheese-beef-burger-with-kitchen-background.jpg?s=612x612&w=0&k=20&c=ZApLb9V7HEHcCa12vKG_4x2314tYUML3CLofF_KBMM4=',price: 20 },
    {id:"2" ,name:'Chicken', img:'https://media.istockphoto.com/id/1438143625/photo/double-cheese-beef-burger-with-kitchen-background.jpg?s=612x612&w=0&k=20&c=ZApLb9V7HEHcCa12vKG_4x2314tYUML3CLofF_KBMM4=',price: 30 },
    {id:"3" ,name:'Cheez Pizza', img:'https://media.istockphoto.com/id/1438143625/photo/double-cheese-beef-burger-with-kitchen-background.jpg?s=612x612&w=0&k=20&c=ZApLb9V7HEHcCa12vKG_4x2314tYUML3CLofF_KBMM4=',price: 15 },
    {id:"4" ,name:'SmartPhone', img:'https://media.istockphoto.com/id/1438143625/photo/double-cheese-beef-burger-with-kitchen-background.jpg?s=612x612&w=0&k=20&c=ZApLb9V7HEHcCa12vKG_4x2314tYUML3CLofF_KBMM4=',price: 200 },
      {id:"5" ,name:'Laptop', img:'https://media.istockphoto.com/id/1438143625/photo/double-cheese-beef-burger-with-kitchen-background.jpg?s=612x612&w=0&k=20&c=ZApLb9V7HEHcCa12vKG_4x2314tYUML3CLofF_KBMM4=',price: 200 },
        {id:"6" ,name:'Fan', img:'https://media.istockphoto.com/id/1438143625/photo/double-cheese-beef-burger-with-kitchen-background.jpg?s=612x612&w=0&k=20&c=ZApLb9V7HEHcCa12vKG_4x2314tYUML3CLofF_KBMM4=',price: 200 },
          {id:"7" ,name:'Chair', img:'https://media.istockphoto.com/id/1438143625/photo/double-cheese-beef-burger-with-kitchen-background.jpg?s=612x612&w=0&k=20&c=ZApLb9V7HEHcCa12vKG_4x2314tYUML3CLofF_KBMM4=',price: 200 },
            {id:"8" ,name:'PC', img:'https://media.istockphoto.com/id/1438143625/photo/double-cheese-beef-burger-with-kitchen-background.jpg?s=612x612&w=0&k=20&c=ZApLb9V7HEHcCa12vKG_4x2314tYUML3CLofF_KBMM4=',price: 200 },
              {id:"9" ,name:'Hat', img:'https://media.istockphoto.com/id/1438143625/photo/double-cheese-beef-burger-with-kitchen-background.jpg?s=612x612&w=0&k=20&c=ZApLb9V7HEHcCa12vKG_4x2314tYUML3CLofF_KBMM4=',price: 200 },
  ]

  return (
    <>
   
   
    

   <div className='  bg-gray-100 p-8'>
    <div className='  grid grid-cols-3  gap-4  mt-[30px] p-[100px] items-center   pt-12 w-full sm:grid-cols-3 md:col-1 lg:grid-col-2 flex-wrap'>
      {Product.map((item) => (
         
          <div
            key={item.id}
            className='border  bg-white rounded  w-[300px] hover:transform hover:scale-105 grid grid-col-1'
          >
            <div className=''> 
            <img
              src={item.img}
              alt={item.name}
              className='w-full h-48 object-cover rounded-t' 
            />
             </div>
            <div >
              <div className='flex justify-between items-center p-2'>
                <p className='font-bold text-xl '>Item</p>
                 <h2 className="text-lg font-semibold">{item.name}</h2>
              </div>
             <div className='flex justify-between items-center p-2'>
              <p className='font-bold text-xl '>Price</p>
              <p className="text-green-600 font-bold">${item.price}</p>
             </div>
              
              <div className='flex justify-center  mb-5'>
            <button className='bg-amber-200 text-white font-bold p-3 rounded  hover:bg-yellow-400' onClick={() => addToCart(item)}>Add to Cart</button>
           </div>
            </div>
          </div>
        ))}
    </div>
    </div>
    </>
    
  )
}

export default Home
