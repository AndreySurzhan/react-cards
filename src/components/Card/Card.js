import React from "react";
import CardCondtibutionList from "../CardContributionList/CardContributionList";
import "./Card.css"


export default function Card(props) {
  return (
    <div className="card-container" style={{width: props.card.width, backgroundColor: props.card.color}}>
      <h2 className="card-title">{props.card.title}</h2>
      {props.card.contribution && props.card.contribution.sum
        ? (
          <h3 className="card-sum">
            {`$${props.card.contribution.sum}`}
          </h3>
        )
        : null}
      {props.card.contribution && props.card.contribution.items.length
        ?
        <CardCondtibutionList items={props.card.contribution.items} />
        : null}
      {props.card.isFooterShown
        ? (
          <div className="card-footer">
            <div>Year to Date</div>
            <div>Prev 3 Years</div>
            <div>Inception to Date</div>
          </div>
        )
        : null}
    </div>
  );
}
