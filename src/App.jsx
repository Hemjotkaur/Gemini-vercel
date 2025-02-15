import { useState } from 'react'

import './App.css'
import Sidebar from './Components/Sidebar'
import Body from './Components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Sidebar />
     <Body />
     
    </>
  )
}

export default App
