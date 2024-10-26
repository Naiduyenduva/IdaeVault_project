import { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';



function Login(){
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");
     const [error, setError] = useState(null);
     const navigate = useNavigate();


     function handleEmailChange (e) {
        setEmail(e.target.value);
     }
     function handlePasswordChange (e) {
        setPassword(e.target.value);
     }

     async function handleSubmit(e) {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://localhost:3000/user/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
            });
      
            if (response.ok) {
                alert('login succes')
            } else {
                throw new Error('Invalid credentials');
            }

            const data = await response.json();
            localStorage.setItem('token',data.token);
            navigate('/dashboard');
           } catch (err) {
            setError(err.message);
          }
     }

    return (
        <div className="login">
             <form onSubmit={handleSubmit}>
              <label>Email</label>
             <input 
            type="text" 
            name="email" 
            value={email}
            onChange={handleEmailChange}
          /><br/>
          <label>Password</label>
           <input 
            type="password" 
            name="password" 
            value={password}
            onChange={handlePasswordChange}
          /><br/>
          <h3>Don't have an account? <Link to='/signup'>Signup</Link></h3>
          <button type="submit">Login</button>
          </form>
        </div>
    )
}

export default Login;