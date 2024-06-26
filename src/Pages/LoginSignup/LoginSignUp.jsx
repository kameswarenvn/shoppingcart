import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignUp.css';

const LoginSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked inside or not');
    
    axios.post("https://sheet.best/api/sheets/2b86efdd-3187-46ed-bd22-f01ccd59d2bd", formData)
      .then((response) => {
        console.log(response.data);
        alert("Form submitted successfully!");
        setFormData({ name: '', email: '', password: '' }); // Clear form
      })
      .catch((error) => {
        console.error(error);
        alert("Form submission failed!");
      });
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Continue</button>
        </form>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='agree' id='agree' required />
          <p>By Continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
