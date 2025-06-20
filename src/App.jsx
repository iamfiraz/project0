import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>ktu-connect</h1>
      <img src="ktu.png"></img>

         <Navbar />
      <Routes>
        <Route path='/l' element={<Login />} />
      </Routes>
    </>
  )
}

export default App