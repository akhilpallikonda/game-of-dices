import React from "react";
import Game from "./components/Game";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <span>
            <img src="dice.png" alt="dice" height="48" width="48" />
          </span>{" "}
          Game of Dices
        </h1>
      </header>
      <main>
        <Game />
      </main>
      <footer> Made with React.js by Akhil</footer>
    </div>
  );
}
