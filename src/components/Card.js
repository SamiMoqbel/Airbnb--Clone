import React from "react";
import "../styles/Card.css"

let Star = "/images/star.png"

export default function Card(card){
    let textBadge
    if( card.openSpots <=7 ){
      textBadge="Limited"
      if(card.openSpots == 0){
        textBadge="Sold Out"
      }
    }

  return(
    <div className="card--container">

      {textBadge && <div className="card--badge">{textBadge}</div>}
      <img draggable="false" src={card.pic} className="card--image" />
      <div className="card--info">
        <div>
          <img draggable="false" src={Star} className="card--star" />
            <span>{card.stats.rating}</span>
            <span className="gray">({card.stats.seats}) • </span>
            <span className="gray">{card.location}</span>
        </div>
          <p className="card-title">{card.title}</p>
          <p><span className="bold card-price">From ${card.price}</span> / person</p>
      </div>
      
    </div>
  )
}