import uuid from 'uuid';
import { Db } from '../firebase/firebase';
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    const expensesRef = collection(Db, 'expenses');
    addDoc(expensesRef, expense)
      .then(docRef => {
        dispatch(
          addExpense({
            id: docRef.id,
            ...expense,
          })
        );
      })
      .catch((error) => {
        console.log("Error while adding expense.", error);
      });
  }
}

export const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
