import React from 'react'
import image from '../assets/Image.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home' >
      <div className='home-container'>
        <div className='box box1'>
          <h1 className='heading1'>A place where ideas <span>shared</span>  and <span>stored</span>  for you</h1>
          <h2 className='heading2'>Dump and collect project ideas</h2>
          <Link to='/signup'><button className='get'>Get Started</button></Link>
        </div>
        <div className='box'>
        <img src={image} alt="Description" className="image" />
        </div>
      </div>
    </section>
  )
}

export default Home;