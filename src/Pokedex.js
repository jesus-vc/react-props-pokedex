import React from "react";
import Pokecard from "./Pokecard";
import "./styles/Pokedex.css";

const Pokedex = ({ pokemonArr }) => {
  return (
    <div className="Pokedex">
      <p className="Pokedex-header">Pokedex</p>
      {pokemonArr.map((p) => (
        <Pokecard
          key={p.id}
          id={p.id}
          name={p.name}
          type={p.type}
          exp={p.base_experience}
        />
      ))}
    </div>
  );
};

export default Pokedex;
