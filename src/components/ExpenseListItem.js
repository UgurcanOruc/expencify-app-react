import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
   return (
     <div>
       <p>
         {description} : {amount}, {createdAt}
         <button onClick={(e) => {
          dispatch(removeExpense({id}));
         }}>Remove</button>
       </p>
     </div>
   );
};

export default connect()(ExpenseListItem);