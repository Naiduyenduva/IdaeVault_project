import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
    // State to manage form data
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value 
      });
    };  
    const handleSubmit = async (e) => {
      e.preventDefault(); 
      try {
        const response = await fetch('http://localhost:3000/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          alert('signup successfully')
          console.log("User signed up successfully");
        } else {
          console.log("Failed to sign up");
        }
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
  
    return (
      <div className="signup">
        <h1 className="s-title">Create your account</h1>
        <form onSubmit={handleSubmit}>
          <label>Email address</label><br/>
          <input 
            type="text" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
          /><br/>
  
          <label>Password</label><br/>
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange}
          /><br/>
  
          <label>First Name</label><br/>
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName}
            onChange={handleChange}
          /><br/>
  
          <label>Last Name</label><br/>
          <input 
            type="text" 
            name="lastName" 
            value={formData.lastName}
            onChange={handleChange}
          /><br/>
        <h3>Already have an account? <Link to='/login'>Login</Link> </h3>
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
  
  export default Signup;