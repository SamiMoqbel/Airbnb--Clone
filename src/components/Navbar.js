import React from 'react'
import "../styles/Navbar.css"

let AirbnbLogo = '/images/airbnb-logo.png'

export default function Navbar(){
  return(
    <div className='navbar-container'>
      <img draggable="false" src={AirbnbLogo} className='logo-img'/>
      <h3 className='website-title'>airbnb</h3>
    </div>
  )
}