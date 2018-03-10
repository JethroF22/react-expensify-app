import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "./actions/filters";
import getVisibileExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "water bill",
    amount: 20000
  })
);

store.dispatch(
  addExpense({
    description: "gas bill",
    amount: 50000,
    createdAt: 1000
  })
);

store.dispatch(
  addExpense({
    description: "rent",
    amount: 195000
  })
);

const state = store.getState();

const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
