import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto py-12 p-4 grid md:grid-cols-3 gap-6'>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, Burger's Out</p>
              <p className='px-2'>Burgers in Town</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </div>
          <img 
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="pizzaaa" />
        </div>

        {/* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>New Resturants</p>
              <p className='px-2'>Added daily</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </div>
          <img 
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="pizzaaa" />
        </div>

        {/* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
              <p className='px-2'>Tasty Treats</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </div>
          <img 
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src="https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2019&q=80" alt="pizzaaa" />
        </div>
    </div>
  )
}

export default HeadlineCards