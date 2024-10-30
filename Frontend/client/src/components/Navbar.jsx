
import { Link } from 'react-router-dom';
import { Lightbulb } from "lucide-react";


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

  export default Navbar;