import React, { useState, useEffect } from "react";
import Dice from "../Dice";
import BetButton from "../BetButton";
import Timer from "../Timer";
import Result from "../Result";
import { getRandomInt } from "../../helpers/getRandomInt";
import { getResultMessage } from "../../helpers/getResultMessage";
import { initialValues } from "../../helpers/constants";

export const GameScreen = ({ balance, setBalance, setIsGameStarted }) => {
  const [disableBets, setDisableBets] = useState(false);
  const [dicebets, setDiceBets] = useState({
    ...initialValues
  });
  const [result, setResult] = useState(0);
  const [resultMessage, setResultMessage] = useState("");
  const onBetButtonClick = (betNumber) => {
    let updatedDicebets = { ...dicebets, [betNumber]: dicebets[betNumber] + 1 };
    setDiceBets({ ...updatedDicebets });
  };
  const calculateResult = () => {
    const winningNumber = getRandomInt(6);
    let newBalance = balance;
    for (const [key, value] of Object.entries(dicebets)) {
      // console.log(`${key}:${value} => ${winningNumber}`);
      if (key === winningNumber.toString()) {
        newBalance = newBalance + parseInt(value, 10) * 2;
      } else {
        newBalance = newBalance - parseInt(value, 10);
      }
    }
    setBalance(newBalance);
    setResult(winningNumber);
    setResultMessage(getResultMessage(balance, newBalance));
    setDisableBets(false);
  };
  useEffect(() => {
    if (disableBets) {
      setTimeout(() => {
        calculateResult();
      }, 2000);
    }
  }, [disableBets]);

  useEffect(() => {
    if (result === 0) {
      // initial state
      setTimeout(() => {
        setDisableBets(true);
      }, 10000);
    }

    if (result > 0) {
      // After result
      setTimeout(() => {
        setResult(0);
        setDiceBets({ ...initialValues });
        setIsGameStarted(false);
      }, 5000);
    }
  }, [result]);
  return result > 0 ? (
    <Result winningNumber={result} resultMessage={resultMessage} />
  ) : (
    <div>
      {disableBets ? (
        <Dice isRolling={disableBets} />
      ) : (
        <Timer countdown={10} />
      )}
      {Object.keys(dicebets).map((number) => {
        return (
          <BetButton
            key={number}
            betNumber={number}
            betValue={dicebets[number]}
            disableBets={disableBets}
            onBetButtonClick={onBetButtonClick}
          />
        );
      })}
    </div>
  );
};
export default GameScreen;
