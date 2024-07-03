import React from 'react'
import Register from './Components/Register'
import Login from './Components/Login'
import Navigate from './Components/Navigate'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate />}/>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>

    </Router>

  );
}
