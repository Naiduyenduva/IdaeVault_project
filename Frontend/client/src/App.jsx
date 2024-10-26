import './App.css'
import Signup from './components/signup'
import Login from './components/login'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // Your protected page
import { Lightbulb } from "lucide-react";
import { Link } from 'react-router-dom';

function App() {

  return (
     <Router>
    <div class>
      <Navbar />
    <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} /> {/* Protected route */}
    </Routes>
   </div>
   </Router>
  )
}

function Navbar() {
  return <div className='navbar navborder'>
    <div className='nav-bulb'>
      <Lightbulb className='lightbulb' />
    <h1><Link to='/'>IdeaVault</Link></h1>
    </div>
    <div className='navbar'>
      <h2><Link to='/signup'>Signup</Link></h2>             
      <h2><Link to='/login'>Login</Link> </h2>  
    </div>
  </div>
}

export default App
