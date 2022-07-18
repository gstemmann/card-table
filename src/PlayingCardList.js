import React, { useState } from "react";
import PlayingCard from "./PlayingCard";
import useAxios from "./hooks/useAxios";
import { formatCard } from "./helpers";
import "./PlayingCardList.css";

const baseUrl = "https://deckofcardsapi.com/api/deck/";
/* Renders a list of playing cards.
 * Can also add a new card at random. */


function CardTable() {
    const [cards, addCard, clearCards] = useAxios(
      "cards", 
      `${baseUrl}/new/draw/`
    )
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(formatCard)}>Add a playing card!</button>
        <button onClick={clearCards}>Clear all cards!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map( card => (
          <PlayingCard key={card.id} front={card.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
