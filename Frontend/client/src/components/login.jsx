import { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import Modal from "./Modal";

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
            const response = await fetch('https://idae-vault.vercel.app/user/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
            });
      
            if (response.ok) {
                alert('login succes')
                // setIsLoggedIn(true);
              } else {
                throw new Error('Invalid credentials');
              }

            const data = await response.json();
            localStorage.setItem('token',data.token);
            navigate('/user');
           } catch (err) {
            setError(err.message);
          }
     }

     function closeModal () {
      setError(false);
     }

    return (
        <div className="login">
            <h1 className="l-title">Sign in to your account</h1>
             <form onSubmit={handleSubmit}>

              <label>Email address</label><br/>
             <input 
            type="text" 
            name="email" 
            required={true}
            value={email}
            onChange={handleEmailChange}
          /><br/>

          <label>Password</label><br/>
           <input 
            type="password" 
            name="password"
            required={true} 
            value={password}
            onChange={handlePasswordChange}
          /><br/>

          <h3>Don't have an account? <Link to='/signup'><span>Signup</span></Link></h3>
          <button type="submit">Login</button>
          </form>

          {error && <Modal message={error} onClose={closeModal} />}
          </div>
    )
}

export default Login;