import './App.css'
import Signup from './components/Signup'
import Login from './components/login'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home'; // Your protected page
import Navbar from './components/Navbar';
import ProjectData from './components/ProjectData';
import User from './components/user';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
     <Router>
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path='/projectdata' element={<ProjectData />} />
          <Route path='/user' element={<User setIsLoggedIn={setIsLoggedIn} />} />
    </Routes>
   </div>
   </Router>
  )
}

export default App;