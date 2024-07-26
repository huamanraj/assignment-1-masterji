import { useState } from 'react'

import LogoButton from './components/LogoButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <div className='mt-20 '>
    <h1 className='text-5xl p-2 text-center font-bold text-white'>Chai aur Code</h1>
    <h1 className='text-3xl p-2 text-center font-bold text-white'>React Assignment Solution</h1>

    <div className='flex flex-wrap  justify-center p-5 m2'>
    <a href={`/otp-form`}>
      <button className='bg-[#112D4E] px-8 py-6 m-2 text-white rounded-xl sm:text-2xl text-md font-bold hover:bg-[#1c395b]  transition-all'>
      OTP Form
      </button> </a>
      <a href={`/course-list`}>
      <button className='bg-[#112D4E] px-8 py-6 m-2 text-white rounded-xl sm:text-2xl text-md font-bold hover:bg-[#1c395b]  transition-all'>
      Drag and Drop Course Cards 
      </button> </a>
      <a href={`/batches`}>
      <button className='bg-[#112D4E] px-8 py-6 m-2 text-white rounded-xl sm:text-2xl text-md font-bold hover:bg-[#1c395b]  transition-all'>
      Data Table
      </button> </a>
    </div>
    
   
    </div>
     <div className='fixed bottom-10 right-10'>
      <LogoButton/>
     </div>
    </>
  )
}

export default App
