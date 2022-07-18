import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlips from "./hooks/useFlips";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [flipState, flip] = useFlips();
  return (
    <img
      src={flipState ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;