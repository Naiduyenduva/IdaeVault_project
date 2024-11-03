import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function Signup() {
    // State to manage form data
    const initialFormData = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
  
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
          navigate('/login');
          setFormData(initialFormData);
        } else {
          throw new Error('Email already exists');
        }
      } catch (err) {
        setError(err.message);
      }
    };

  
    return (
      <>
      <div className="signup-error">
         { error && <p className="error">{error}</p>}
      </div>
      <div className="signup">
        <h1 className="s-title">Create your account</h1>
        <form onSubmit={handleSubmit}>
          <label>Email address</label><br/>
          <input 
            type="text" 
            name="email" 
            required={true}
            value={formData.email}
            onChange={handleChange}
          /><br/>
  
          <label>Password</label><br/>
          <input 
            type="password" 
            name="password" 
            required={true}
            value={formData.password}
            onChange={handleChange}
            /><br/>
  
          <label>First Name</label><br/>
          <input 
            type="text" 
            name="firstName" 
            required={true}
            value={formData.firstName}
            onChange={handleChange}
          /><br/>
  
          <label>Last Name</label><br/>
          <input 
            type="text" 
            name="lastName" 
            required={true}
            value={formData.lastName}
            onChange={handleChange}
            /><br/>
        <h3>Already have an account? <Link to='/login'><span>Login</span></Link> </h3>
          <button type="submit">Signup</button>
        </form>
      </div>
      </>
    );
  }
  
  export default Signup;