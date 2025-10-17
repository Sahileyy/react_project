import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png'; 
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import api from '../../axios';

axios.defaults.withCredentials = true

const Login = () => {

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
    const res = await api.post('/user/login',form )
    setMessage(res.data)
     console.log('Login response:', res.data);

    if(res.data === 'USER LOGGED IN'){
      // console.log(res.data);
      
      navigate('/')
    }
  }
  catch(err){
    setMessage(err.response?.data || 'REGISTRATION FAILED')
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
            <p className="text-red-600 font-light text-center text-xs italic">{message}</p>
          <button type="submit">Login</button>
        </form>

        <div className="home-link">
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default Login;