import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpensesSummary";

test("should render correctly with 1 expense", () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={124183} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render correctly with multiple expensesu", () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={14} expensesTotal={23874293} />);
  expect(wrapper).toMatchSnapshot();
});
