import React, { useState } from "react";
import GameScreen from "../GameScreen";
import Instructions from "../Instructions";
import styles from "./styles.module.css";

export const Game = () => {
  const [balance, setBalance] = useState(100);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const startGame = () => {
    setIsGameStarted(true);
  };
  return (
    <div className={styles.container}>
      <h3> Current balance ${balance} </h3>
      {balance <= 0 && <h3>Insufficient balance. Game Over.</h3>}
      {isGameStarted ? (
        <GameScreen
          balance={balance}
          setIsGameStarted={setIsGameStarted}
          setBalance={setBalance}
        />
      ) : (
        <>
          <Instructions />
          <button
            disabled={balance <= 0}
            className={styles.startButton}
            onClick={startGame}
          >
            Start Game Now
          </button>
        </>
      )}
    </div>
  );
};
export default Game;
