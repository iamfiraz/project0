import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup';
import Login from './Components/Login';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/s" element={<Signup/>}/>
      <Route path="/l" element={<Login/>}/>
      </Routes></>
  )
}

export default App