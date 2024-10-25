import './App.css'

function App() {

  return (
   <div>
    <h1>Idea Vault</h1>
    <Signin />
   </div>
  )
}

import { useState } from 'react';

function Signin() {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value // Update specific field based on name attribute
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) // Send the form data as JSON
      });
      
      if (response.ok) {
        // Handle success
        alert('signup successfully')
        console.log("User signed up successfully");
      } else {
        // Handle error
        console.log("Failed to sign up");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label><br/>
        <input 
          type="text" 
          placeholder="Enter your email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
        /><br/>

        <label>Password</label><br/>
        <input 
          type="password" 
          placeholder="Enter your password" 
          name="password" 
          value={formData.password}
          onChange={handleChange}
        /><br/>

        <label>First Name</label><br/>
        <input 
          type="text" 
          placeholder="Enter your first name" 
          name="firstName" 
          value={formData.firstName}
          onChange={handleChange}
        /><br/>

        <label>Last Name</label><br/>
        <input 
          type="text" 
          placeholder="Enter your last name" 
          name="lastName" 
          value={formData.lastName}
          onChange={handleChange}
        /><br/>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}


export default App
