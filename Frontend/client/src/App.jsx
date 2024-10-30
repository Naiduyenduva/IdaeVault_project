import './App.css'
import Signup from './components/signup'
import Login from './components/login'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home'; // Your protected page
import { Lightbulb } from "lucide-react";
import { Link } from 'react-router-dom';
import Card from './components/Card'
import ProjectData from './components/ProjectData';

function App() {

  return (
     <Router>
    <div>
      {/* <Navbar /> */}
    <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/home" element={<Home />} />
          <Route path='/' element={<ProjectData />} />
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
    <div className='navbar buttons'>
      <Link to='/signup'><button>Signup</button> </Link>            
      <Link to='/login'><button>Login </button> </Link> 
    </div>
  </div>
}

export default App
