import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)
  const [substraction, setSubstraction] = useState(0)
  return (
    <>
      <h1>Welcome to Chai aur Code</h1>
      <Login />
      {count} <br />
      <button
      onClick={() => setCount(count+1) }
      >Additions</button>

      <button
      onClick={() => setCount(count - 1)}
      >Substractions</button>
    </>
  )
}



export default App
