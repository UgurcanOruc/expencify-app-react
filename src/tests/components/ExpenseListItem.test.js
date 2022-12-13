import React from "react";
import { shallow } from "enzyme";
import { ExpenseListItem } from "../../components/ExpenseListItem";
import expenses from "../fixtures/expneses";

test("should render expense", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});