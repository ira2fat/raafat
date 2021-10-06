import React from 'react'


function Header(props) {
  let link = props.link;
  return (
    <div className="Header">
      <img src={link} alt="Hamada"
        width="100%" height="200px " />

    </div>
  )
}

export default Header