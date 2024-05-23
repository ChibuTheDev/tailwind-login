import React from 'react';
import Form from './components/Form';

function App() {
  return (
    <div className='flex w-full h-screen'>
    <div className='w-full flex items-center justify-center lg:w-1/2'>
     <Form/>
    </div>
  
    <div className='hidden lg:flex items-center justify-center h-screen w-1/2 bg-slate-100 relative'>
      <div className="w-60 h-60 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-full animate-bounce" />
      <div className='w-full h-1/2 bg-white/10 absolute bottom-0' />
    </div>
    </div>
  );
}

export default App;
