import { useState } from "react";
import { useNavigate } from 'react-router-dom';


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
        <div>
             <form onSubmit={handleSubmit}>
             <input 
            type="text" 
            placeholder="Enter your email" 
            name="email" 
            value={email}
            onChange={handleEmailChange}
          /><br/>
           <input 
            type="password" 
            placeholder="Enter your password" 
            name="password" 
            value={password}
            onChange={handlePasswordChange}
          /><br/>
          <button type="submit">Login</button>
          </form>
        </div>
    )
}

export default Login;