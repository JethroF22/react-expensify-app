import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const textFilter = "gas";
  wrapper.find("input").simulate("change", {
    target: { value: textFilter }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(textFilter);
});

test("should sort by date", () => {
  wrapper.setProps({
    filters: altFilters
  });
  const value = "date";
  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(sortByDate).toHaveBeenLastCalledWith();
});

test("should sort by amount", () => {
  const value = "amount";
  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenLastCalledWith();
});

test("should handle date changes", () => {
  const dates = {
    startDate: moment(0).add(4, "years"),
    endDate: moment(0).add(8, "years")
  };
  wrapper.find("DateRangePicker").prop("onDatesChange")(dates);
  expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate);
});

test("should handle date focus changes", () => {
  const calendarFocused = "startDate";
  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
