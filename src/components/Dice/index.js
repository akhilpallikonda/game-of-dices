export const Dice = ({ isRolling }) => {
  return isRolling ? (
    <div>
      <img src="rolling-dice.gif" alt="rolling dice" height="96" width="96" />
    </div>
  ) : (
    <div>
      <img src="dice.png" alt="dice" height="64" width="64" />
    </div>
  );
};
export default Dice;
