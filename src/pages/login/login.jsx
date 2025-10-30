import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png'; 
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import api from '../../axios';

axios.defaults.withCredentials = true

const Login = ({apiEndPoint,apiDirection}) => {

const navigate = useNavigate()

const [form,setform] = useState({
  username:'',
  email:'',
  password:'',
})

const [message,setMessage] = useState('')

const handleChange  = e =>{
  setform({...form,[e.target.name]: e.target.value})
}


const handleSubmit = async e =>{
  e.preventDefault();

  try{
    const res = await api.post(apiEndPoint,form )
   console.log("login response:",res.data);

   if(res.data && res.data.user){
    localStorage.setItem("user",JSON.stringify(res.data.user))
    setMessage(res.data.message)

    if (res.data.user.role === "admin"){
      navigate('/admin')
    }
    if(res.data.user.role === "user"){
      navigate('/')
    }
    else{
      setMessage(res.data.message || "login failed")
    }
   }
   
   
  }
  catch(err){
    setMessage(err.response?.data || 'LOGIN FAILED')
  }
}

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-section">
          <img src={logo} alt="New Sports Logo" className="logo-img" />
         
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"  onChange={handleChange} required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"  onChange={handleChange} required />
            <p className=" font-light text-center text-xs italic">{message}</p>
          <button type="submit">Login</button>
        </form>
        <div className='text-center text-sm text-red-600 py-3 ' ><p className='cursor-pointer hover:underline' onClick={()=>{navigate('/register')}}>Don't have an account?</p></div>

        <div className="home-link">
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default Login;