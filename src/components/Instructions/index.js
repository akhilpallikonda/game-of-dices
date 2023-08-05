import * as styles from "./styles.module.css";
export const Instructions = () => {
  return (
    <div className={styles.instructions}>
      <h3> Instructions </h3>
      <ul>
        <li> This game starts with a timer of 10 seconds </li>
        <li>
          You can click on each bet position. Each click will increment bet by
          $1
        </li>
        <li>
          If dice role matches your bet, you will win 2x of your bet on the dice
        </li>
        <li> No more bets allowed after 10 seconds</li>
      </ul>
    </div>
  );
};
export default Instructions;
