import React from 'react'
import image from '../assets/image.png'

const Dashboard = () => {
  return (
    <section className='gapa' >
      <div className='container'>
        <div className='box'>
          <h1 className='heading1'>A place where ideas <span>shared</span>  and <span>stored</span>  for you</h1>
          <h2 className='heading2'></h2>
        </div>
        <div className='box'>
        <img src={image} alt="Description" className="image" />
        </div>
      </div>
    </section>
  )
}

export default Dashboard;