import React from 'react'
import './header.css'
function Header(props) {
  let link = props.link;
  return (
    <div className="Header" >
      <img src={link} alt="header" className='header'/>
    </div>
  )
}
export default Header