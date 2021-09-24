import React from "react";
import cards from "./cards";
import Card from "../Card/Card";
import "./CardGallery.css";

export default function CardGallery(props) {
  return (<div>
    <h1>Gallery</h1>
    <div className="card-gallery-container">
      {cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  </div>
  );
}
