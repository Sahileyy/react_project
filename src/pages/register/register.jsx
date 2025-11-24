// 
import React, { useState } from 'react';
import './register.css';
import logo from '../../assets/logo.png'; 
import { useNavigate } from 'react-router-dom';
import api from '../../axios.jsx'; // <--- use your axios instance

const Register = () => {

  const navigate = useNavigate();

  const [form, setform] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    
    try {
      const res = await api.post('/user/register', form);

      setMessage(res.data);

      if (res.data === 'REGISTERED SUCCESSFULLY') {
        navigate('/');
      }

    } catch(err) {
      console.log(err);
      setMessage(err.response?.data || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="logo-section">
          <img src={logo} alt="New Sports Logo" className="logo-img" />
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />

          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />

          <label>Re-enter Password</label>
          <input type="password" name="password2" onChange={handleChange} required />

          <button type="submit">Register</button>
          <p className="text-red-600 font-light text-center text-xs italic">{message}</p>
        </form>

        <div className="home-link">
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
