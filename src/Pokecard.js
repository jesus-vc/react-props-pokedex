import React from "react";
import "./styles/Pokecard.css";

const Pokecard = ({ id, name, type, exp }) => {
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard">
      <p className="Pokecard-name">{name}</p>
      <img src={imgURL} alt="Pokemon" />
      <p className="Pokecard-text">Type: {type}</p>
      <p className="Pokecard-text">EXP: {exp}</p>
    </div>
  );
};

export default Pokecard;
