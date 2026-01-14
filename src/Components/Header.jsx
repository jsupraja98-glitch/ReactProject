import React from 'react'

function Header() {
  return (
    <div id='main'>
        <div className='header-heading'>
            <h3>It's Great Time For Good Taste of Burger</h3>
            <h1><span>BURGER</span> FOR<br/>WEEK</h1>
            <p className='details'>A popular dish featuring a cooked patty 
                usually ground meat like chicken... </p>
            <div className='header-btns'>
                <a href='#' className='header-btn'>Order Now</a>
                
                <a href='#' className='header-btn'>View Menu</a>
                </div>
            </div>
      </div>
  )
}

export default Header;
