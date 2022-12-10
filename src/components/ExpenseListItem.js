import React from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  return (
    <div>
      <p>
        <Link to={`/edit/${id}`}>
          {description} : {amount}, {createdAt}
        </Link>
        <button onClick={(e) => {
          dispatch(removeExpense({ id }));
        }}>Remove</button>
      </p>
    </div>
  );
};

export default connect()(ExpenseListItem);