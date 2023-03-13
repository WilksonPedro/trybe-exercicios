import React, { useState } from "react";
import "./App.css";

function App() {
  const [love, setLove] = useState(false);

  const handleClick = () => {
    setLove(!love);
  };

  return (
    <div className="App">
      <h1 className="title">Meu Amor</h1>
      <button
        onClick={handleClick}
        className={love ? "loveButton clicked" : "loveButton"}
      >
        {love ? "Eu Te Amo!" : "Clique Aqui"}
      </button>
      {love && (
        <div className="poem">
          <p>Você é a luz que ilumina meu universo</p>
          <p>Meu coração acelera quando converso contigo e me faz sorrir</p>
          <p>Você me faz feliz como ninguém mais pode fazer alem de ti Lore</p>
          <p>Meu amor, tu é meu sol no centro do meu universo!</p>
        </div>
      )}
      <div className="heart1"></div>
      <div className="heart2"></div>
      <div className="heart3"></div>
    </div>
  );
}

export default App;
