import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-[80%] h-[80%] border border-[#27272A] rounded-lg'>
        <Header />
      </div>
    </div>
  )
}

export default App;
