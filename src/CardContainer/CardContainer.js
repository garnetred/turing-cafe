import React from "react";
import "./CardContainer.css";
import Card from "../Card/Card";

const CardContainer = ({ data }) => {
  //map through all cards, return an individual card
  //card section will dictate what the cards say
  const allCards = data.map((card) => <Card key={card.id} {...card} />);

  return <section className="card-container">{allCards}</section>;
};

export default CardContainer;
