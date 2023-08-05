import Timer from "../Timer";
export const Result = ({ winningNumber, resultMessage }) => {
  return (
    <div>
      Winnng number is {winningNumber}
      <h3> {resultMessage} </h3>
      <strong>Returning to main screen</strong>
      <Timer countdown={5} />
    </div>
  );
};
export default Result;
