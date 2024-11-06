
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({isLoggedIn, setIsLoggedIn}) {

    function logout() {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    }

    return (
       <div className='navbar navborder'>
      <div className='nav-bulb'>
        <h2 className='idea-vault'><Link to='/'>IdeaVault</Link></h2>
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