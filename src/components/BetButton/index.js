import * as styles from "./styles.module.css";
const BetButton = ({ betNumber, betValue, disableBets, onBetButtonClick }) => {
  return (
    <div style={{ display: "inline-block", padding: "0.5rem" }}>
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
