import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card"
import Data from "../data"
import "../styles/App.css"

export default function App(){
  const cardsData = Data.map( card => <Card 
    key={card.id}
    {...card}
    />)
  return(
    <div className="public-container">

      <Navbar />
      <Hero className="hero-container" />
      <div className="cards-container">
        {cardsData}
      </div>
      
    </div>
  )
}



