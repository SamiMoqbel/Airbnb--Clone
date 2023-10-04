import React from 'react'
import "../styles/Hero.css"

let PhotoGrid =  '/images/photo-grid.png'

export default function Hero(){
  return(
      <div className='hero-container'>
        <img draggable="false" src={PhotoGrid} className='photo-grid'/>
        <h1 className='hero-title'>Online Experiences</h1>
        <p className='hero-paragraph'>Join unique interactive activities 
          led by one-of-a-kind hosts—all without leaving home.
        </p>
        
      </div>
  )
}