import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
} from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import Db from '../../firebase/firebase';
import { doc, getDocs } from "firebase/firestore";

const createMockStore = configureMockStore([thunk]);

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should change expense fields", () => {
  const action = editExpense("123abc", { note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New note value",
    },
  });
});

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
      type: "ADD_EXPENSE",
      expense: expenses[2],
    });
});

// test("should setup add expense action object with default values", () => {
//     const action = addExpense();
//     expect(action).toEqual({
//       type: "ADD_EXPENSE",
//       expense: {
//           id: expect.any(String),
//           description: '',
//           note: '',
//           amount: 0,
//           createdAt: 0
//       }
//     });
// });