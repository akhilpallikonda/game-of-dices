export const getResultMessage = (oldBalance, newBalance) => {
  const hasWon = newBalance > oldBalance ? "won" : "lost";
  const msg = `You have ${hasWon} $${Math.abs(newBalance - oldBalance)}`;
  return msg;
};
