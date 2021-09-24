import React from "react";
import CardContributionItem from "../CardContributionItem/CardContributionItem";

export default function CardCondtibutionList(props) {
  return (
    <ul className="card-contribution-list">
      {props.items.map((item, i) => (
        <CardContributionItem key={i} item={item} />
      ))}
    </ul>
  );
}
