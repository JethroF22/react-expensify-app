import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test("should add expense", () => {
  const expense = {
    id: "4",
    description: "Cooking classes",
    note: "Professional cooking classes",
    amount: 30000,
    createdAt: moment(0).add(5, "days")
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit expense", () => {
  const amount = 167000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[2].amount).toBe(amount);
});

test("should not edit expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
    updates: {
      amount: 176000
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
