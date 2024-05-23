import React from 'react'

export default function Form() {
  return (
    <div className='bg-white py-20 px-10 rounded-3xl border-2 border-gray-100 mx-auto' >
      <h1 className='text-5xl font-semibold'>Welcome Back</h1>
      <p className='font-medium text-lg text-gray-400 mt-4 '>Welcome back! Please enter details</p>

      <div className='mt-8'>
        <div>
            <label className='text-lg font-medium'>Email</label>
            <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter yout email' />
        </div>
        <div>
            <label className='text-lg font-medium'>Password</label>
            <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your password' type='password' />
        </div>
        <div className='mt-5 flex justify-between items-center'>
          <div>
            <input type='checkbox' id='remember' />
            <label className='ml-1 font-medium text-base' for='remember'>Remember for 30 days</label>
            </div>  
            <button className='font-medium text-base text-violet-400'>Forgot Password</button>
        </div>

        <div className='mt-8 flex flex-col gap-2'>
            <button className='bg-violet-500 text-white py-1 text-lg font-bold rounded-sm active:scale-[.98] active:duration-75 transition-all hover:scale-[1.1] ease-in-out '>Sign in </button>
            <button>Sign in with Google </button>
        </div>

      </div>
    </div>
  )
}


