import { Db } from "../firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const expensesRef = collection(Db, `users/${uid}/expenses`);

    return getDocs(expensesRef)
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((doc) => {
          expenses.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        dispatch(setExpenses(expenses));
      })
      .catch((error) => {
        console.log("Error while adding expense.", error);
      });
  };
};

export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    const expensesRef = collection(Db, `users/${uid}/expenses`);

    return addDoc(expensesRef, expense)
      .then((docRef) => {
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
  };
};

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const docRef = doc(Db, `users/${uid}/expenses`, id);
    return updateDoc(docRef, updates)
      .then((result) => {
        console.log(result);
        dispatch(editExpense(id, updates));
      })
      .catch((error) => {
        console.log("Error while updating expense id= " + id, error);
      });
  };
};

export const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const docRef = doc(Db, `users/${uid}/expenses`, id);
    return deleteDoc(docRef)
      .then((result) => {
        dispatch(removeExpense(id));
      })
      .catch((error) => {
        console.log("Error while removing expense.", error);
      });
  };
};
