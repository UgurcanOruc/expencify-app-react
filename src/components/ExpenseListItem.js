import React from "react";
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <p>
        <Link to={`/edit/${id}`}>
          {description} : {amount}, {createdAt}
        </Link>
      </p>
    </div>
  );
};

export default ExpenseListItem;