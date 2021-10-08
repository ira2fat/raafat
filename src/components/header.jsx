import React from 'react'
import'../cssfiles/header.css'

function Header(props) {
  let link = props.link;
  return (
    <div className="Header" >
      <img src={link} alt="Hamada" className='header'/>
    </div>
  )
}
export default Header