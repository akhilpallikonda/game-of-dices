import styles from "./styles.module.css";
const BetButton = ({ betNumber, betValue, disableBets, onBetButtonClick }) => {
  return (
    <div className={styles.betbutton}>
      <button
        onClick={(e) => onBetButtonClick(betNumber)}
        disabled={disableBets}
      >
        <div> Dice: {betNumber} </div>
        <div> Bet: {betValue} </div>
      </button>
    </div>
  );
};
export default BetButton;
