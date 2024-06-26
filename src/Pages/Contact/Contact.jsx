import React, {useState} from 'react'
import './Contact.css'
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phonenumber: '',
        city: '',
        message: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('clicked inside or not');
        
        axios.post("https://sheet.best/api/sheets/2b86efdd-3187-46ed-bd22-f01ccd59d2bd", formData)
          .then((response) => {
            console.log(response.data);
            alert("Form submitted successfully!");
            setFormData({ name: '', email: '', phonenumber: '', city: '', message: '' }); // Clear form
          })
          .catch((error) => {
            console.error(error);
            alert("Form submission failed!");
          });
      };
  return (
    <div className='contact' >
        <div className='contact-container'>

        <h1 className='contact-heading'>Contact Us</h1>
        <form className='contact-form' onSubmit={handleFormSubmit}>
            <input name='name' type='text' placeholder='Enter your Name' value={formData.name} onChange={handleChange} />
            <input name='email' type='email' placeholder='Enter your Email' value={formData.email} onChange={handleChange}/>
            <input name='phonenumber' type='text' placeholder='Enter your Mobile number' value={formData.phonenumber} onChange={handleChange}/>
            <input name='city' type='text' placeholder='Enter your City' value={formData.city} onChange={handleChange}/>
            <input name='message' type='text' placeholder='Enter your Message' value={formData.message} onChange={handleChange}/>
            <button className='contact-button' type='sumbit'>Submit</button>
        </form>
        </div>
        </div>
  )
}

export default Contact