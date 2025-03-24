import React from "react";

function ControlButtons({
  onPrev,
  onNext,
  onBackType,
  onNextType,
  onFrontView,
  onBackView,
  onShowVertical,
  onShowRadar,
}) {
  return (
    <>
      <button
        className="btn-prev"
        onClick={onPrev}
        aria-label="Pokémon anterior"
        title="Pokémon anterior"
      >
       
      </button>
      <button
        className="btn-next"
        onClick={onNext}
        aria-label="Próximo Pokémon"
        title="Próximo Pokémon"
      >
      
      </button>
      <button
        className="btn-back"
        onClick={onBackType}
        aria-label="Voltar tipo anterior"
        title="Voltar tipo anterior"
      >
       
      </button>
      <button
        className="btn-forward"
        onClick={onNextType}
        aria-label="Avançar para próximo tipo"
        title="Avançar para próximo tipo"
      >
        
      </button>
      <button
        className="btn-front"
        onClick={onFrontView}
        aria-label="Mostrar frente do Pokémon"
        title="Mostrar frente do Pokémon"
      />
      <button
        className="btn-back-view"
        onClick={onBackView}
        aria-label="Mostrar costas do Pokémon"
        title="Mostrar costas do Pokémon"
      />
      <button
        className="btn-status-vertical"
        onClick={onShowVertical}
        aria-label="Mostrar status em barras"
        title="Mostrar status em barras"
      />
      <button
        className="btn-status-radar"
        onClick={onShowRadar}
        aria-label="Mostrar status em gráfico radar"
        title="Mostrar status em gráfico radar"
      />
    </>
  );
}

export default ControlButtons;
