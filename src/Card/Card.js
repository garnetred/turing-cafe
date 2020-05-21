import React from 'react'
import "./Card.css"

const Card = ({name, date, id, number, time}) => {
    //map through all cards, return an individual card
    //card section will dictate what the cards say 
    return(
        <section className="card">
            <h1>{name}</h1>
            <p>{date}</p>
            <p>{number}</p>
            <p>{time}</p>
        </section>
    )
}

export default Card;