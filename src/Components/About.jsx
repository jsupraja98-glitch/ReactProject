import React from 'react';
import aboutimage from '../images/about.png';

function About() {
  return (
    <div id='about'>
        <div className='about-text'>
            <h1>UPCOMING EVENT</h1>
            <p>Join us for an exciting event on [15.01.2026] at [Burger Stop].</p>
            <button>Read More</button>
        </div>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
      
    </div>
  )
}

export default About;
