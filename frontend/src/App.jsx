import React from 'react'
import Register from './Components/Register'
import Login from './Components/Login'
import Navigate from './Components/Navigate'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChatArea from './Components/ChatArea'
import Sidebar from './Components/Sidebar'
import './App.css'

export default function App() {
  return (
    <>
      <div className='chat-container'>
        <Sidebar />
        <ChatArea />
      </div>

    </>

    // <Router>
    //   <Routes>
    //     <Route path='/' element={<Navigate />}/>
    //     <Route path='/login' element={<Login />}></Route>
    //     <Route path='/register' element={<Register />}></Route>
    //   </Routes>

    // </Router>

  );
}
