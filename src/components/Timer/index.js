import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

export const Timer = ({ countdown }) => {
  const [timeLeft, setTimeLeft] = useState(countdown);
  useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
  }, [timeLeft]);
  return <div className={styles.timer}> {timeLeft} </div>;
};
export default Timer;
