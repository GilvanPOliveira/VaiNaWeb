import React from "react";

function PokemonImage({ pokemon, showBack }) {
  if (!pokemon || !pokemon.sprites) return null;

  const sprites = pokemon.sprites;
  const genV = sprites.versions["generation-v"]["black-white"].animated;

  const frontAnimated = genV.front_default;
  const backAnimated = genV.back_default;
  const frontStatic = sprites.front_default;
  const backStatic = sprites.back_default;

  const selectedSprite = showBack
    ? backAnimated || backStatic || frontStatic
    : frontAnimated || frontStatic;

  return (
    <>
      {selectedSprite && (
        <img
          key={pokemon.id + "-main-" + (showBack ? "back" : "front")}
          src={selectedSprite}
          alt={pokemon.name}
          className="pokemon-animated fade-in"
        />
      )}
    </>
  );
}

export default PokemonImage;
