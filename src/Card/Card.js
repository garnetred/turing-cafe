import React from "react";
import "./Card.css";

const Card = ({ name, date, id, number, time, cancelReservation }) => {
  return (
    <section className="card">
      <p className="header-titles">Name: {name}</p>
      <p className="header-titles">Date: {date}</p>
      <p className="header-titles">Number of Guests: {number}</p>
      <p className="header-titles">Time: {time}</p>
      <button
        id={id}
        onClick={(event) => cancelReservation(event)}
        type="submit"
      >
        Cancel
      </button>
    </section>
  );
};

export default Card;
