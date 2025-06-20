import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src="ktu.png" alt="img 1" height></img>

         <Navbar />
      <Routes>
        <Route path='/l' element={<Login />} />
        <Route path='/s' element={<Signup />} />
        <Route path='/n' element={<Name />} />
        <Route path='/c' element={<Counter />} />
        <Route path='/ch' element={<Change />} />
        <Route path='/u' element={<User />} />
        <Route path='/p' element={<Product />} />
      </Routes>
    </>
  )
}

export default App