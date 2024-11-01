import './App.css'
import Signup from './components/signup'
import Login from './components/login'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home'; // Your protected page
import Navbar from './components/Navbar';
import ProjectData from './components/ProjectData';
import User from './components/user';

function App() {

  return (
     <Router>
    <div>
      <Navbar />
    <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path='/projectdata' element={<ProjectData />} />
          <Route path='/user' element={<User />} />
    </Routes>
   </div>
   </Router>
  )
}

export default App;