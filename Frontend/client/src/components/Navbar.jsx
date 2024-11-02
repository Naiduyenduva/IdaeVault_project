
import { Link } from 'react-router-dom';
import { Lightbulb } from "lucide-react";

function Navbar({ isLoggedIn, setIsLoggedIn }) {

  
    function logout() {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    }

    return (
       <div className='navbar navborder'>
      <div className='nav-bulb'>
        <Lightbulb className='lightbulb' />
      <h1>IdeaVault</h1>
      </div>
      <div className='navbar buttons'>
      {isLoggedIn ? (
        <>
        <Link to='/'><button onClick={logout}>Logout </button> </Link> 
        </>
      ) : (
        <>
        <Link to='/signup'><button>Signup</button> </Link>            
        <Link to='/login'><button>Login </button> </Link> 
        </>
      )}
      </div>
    </div>
    )
  }

  export default Navbar;