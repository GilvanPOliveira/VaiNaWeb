import React from "react";

function PokemonData({ pokemon, captureRate }) {
  return (
    <div className="pokemon-data">
      <p>
        <strong>No.{pokemon.id}</strong> {pokemon.name}
      </p>
      <p>
        <strong>Altura</strong> {(pokemon.weight / 10).toFixed(1)} m
      </p>
      <p>
        <strong>Peso</strong> {(pokemon.weight / 10).toFixed(1)} kg
      </p>
      <p>
        <strong>Tipo</strong>
        <span className="type-list">
          {pokemon.types.map((t) => {
            const type = t.type.name;
            return (
              <span key={type} className={`type-badge ${type}`}>
                {type}
              </span>
            );
          })}
        </span>
      </p>
      <p>
        <strong>Taxa de Captura:</strong> {captureRate} %
      </p>
    </div>
  );
}

export default PokemonData;
