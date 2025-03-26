import React from "react";

function SearchBox({
  search,
  filteredPokemon,
  onInputChange,
  onFocus,
  onSelect,
  inputRef,
}) {
  return (
    <div className="search-box" ref={inputRef}>
      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={onInputChange}
        onFocus={onFocus}
        aria-label="Campo de busca por nome ou ID do Pokémon"
      />
      {filteredPokemon.length > 0 && (
        <ul className="suggestions">
          {filteredPokemon.map((p) => (
            <li key={p.id} onClick={() => onSelect(p.name)}>
              No.{p.id} - {p.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
