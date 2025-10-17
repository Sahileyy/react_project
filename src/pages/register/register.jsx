import React, { useState } from 'react';
import './Register.css';
import logo from '../../assets/logo.png'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true


const Register = () => {

 const navigate = useNavigate();

const [form,setform]= useState({
  username:'',
  email:'',
  password:'',
  password2:'',
})

const [message,setMessage] = useState('')

const handleChange = e =>{
  setform({...form, [e.target.name]: e.target.value})
}

const handleSubmit = async e =>{
  e.preventDefault();
  try{
    const res = await axios.post('http://localhost:3030/user/register',form);
    setMessage(res.data)
    // console.log(res.data);
    
if(res.data === 'REGISTERED SUCCESSFULLY'){
  navigate('/')
}

  }
  catch(err){
    console.log(err);
    
    setMessage(err.response?.data || 'registration failed')
  }
}

  return (
    <div className="register-container">
      <div className="register-box">
         <div className="logo-section">
                  <img src={logo} alt="New Sports Logo" className="logo-img" />
                 
                </div>
        
       
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={handleChange} required />

          <label htmlFor="password2">Re-enter Password</label>
          <input type="password" id="password2" name="password2" onChange={handleChange} required />

          <button type="submit">Register</button>
          <p className="text-red-600 font-light text-center text-xs italic">{message}</p>
        </form>
      </div>
    </div>
  );
};

export default Register;