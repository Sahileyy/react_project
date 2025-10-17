import React from 'react'
import Navbar from './components/navbar'
import Login from './pages/login/login'
import Register from './pages/register/register'
import HomePage from './pages/home/home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
          <BrowserRouter>
      <Navbar/>
            <Routes>
    <Route path = "/" element = {<HomePage/>}/>
    <Route path = "/register" element = {<Register/>}/>
    <Route path = "/login" element = {<Login/>}/>
            </Routes>
            </BrowserRouter>
    </div>
  )
}

export default App