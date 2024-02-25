import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Hitesh",
    age: 21
  }
  let newArr = [1,2,3,4,5]

  return (
    <>chai aur code
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      
      <Card username="chai aur code" btnText = "Click me"/>
      <Card username="Hitesh" />
      {/* <Card username="Hitesh" btnText = "Visit me"/> */}
      
    </>
  )
}

export default App
