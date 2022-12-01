import { createStore, combineReducers } from 'redux';

// EXPENSES REDUSER
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// FILTERS REDUSER
const filtersReducerDefaultState = {
    text: '',
    sortby: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


// STORE CREATION
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'dasgfsfdsa',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // dateor amount
        startDate: undefined,
        endDate: undefined
    }
};

