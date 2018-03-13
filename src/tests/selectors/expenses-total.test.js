import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
  expect(selectExpensesTotal([])).toBe(0);
});

test("should correctly add up a single expense", () => {
  const amount = expenses[0].amount;
  expect(selectExpensesTotal([expenses[0]])).toBe(amount);
});

test("should correctly add up multiple expenses", () => {
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  expect(selectExpensesTotal(expenses)).toBe(amount);
});
