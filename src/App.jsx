import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup';
import Login from './Components/Login';
import About from './Components/About';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/s" element={<Signup/>}/>
      <Route path="/l" element={<Login/>}/>
      <Route path='/a' element={<About/>}/>
      </Routes></>
  )
}

export default App