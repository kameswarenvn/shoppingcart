import React, { useEffect, useState } from 'react';
import './NewsLetter.css';
import axios from 'axios';

const NewsLetter = () => {
  const [emailSubscribe, setEmailSubscribe] = useState({email: '', });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailSubscribe((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked inside or not');
    
    axios.post("https://sheet.best/api/sheets/4a03b499-58bc-4261-a23d-ce2aca708759", emailSubscribe)
    // axios.post("https://sheet.best/api/sheets/2b86efdd-3187-46ed-bd22-f01ccd59d2bd", emailSubscribe)
      .then((response) => {
        console.log(response.data);
        alert("Email submitted successfully!");
        setEmailSubscribe({ email: '' }); // Clear form
      })
      .catch((error) => {
        console.error(error);
        alert("Email submission failed!");
      });
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type='text'
          placeholder='Your Email id'
          name='email'
          value={emailSubscribe.email}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
