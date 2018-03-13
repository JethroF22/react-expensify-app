export default expenses => {
  return expenses
    .map(expense => expense.amount)
    .reduce((total, currentValue) => total + currentValue, 0);
};
