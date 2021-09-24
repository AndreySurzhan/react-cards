import React from "react";
import './CardContributionItem.css'


export default function CardContributionItem(props) {
  return (
    <li className="card-contribution-item">
      <div className="card-contribution-item-container">
        <div>{props.item.name}</div>
        <div>`${props.item.value}`</div>
      </div>
    </li>
  );
}
