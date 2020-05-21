import React from "react";
import "./CardContainer.css";
import Card from "../Card/Card";

const CardContainer = ({ data, cancelReservation }) => {
  const allCards = data.map((card) => (
    <Card key={card.id} {...card} cancelReservation={cancelReservation} />
  ));

  return <section className="card-container">{allCards}</section>;
};

export default CardContainer;
