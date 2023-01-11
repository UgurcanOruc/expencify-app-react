import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { startRemoveExpense } from "../actions/expenses";

export class ExpenseListItem extends React.Component {
  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    window.location.reload(false);
  };
  
  render() {
    return (
      <div>
        <p>
          <Link to={`/edit/${this.props.expense.id}`}>
            <label className="label-as-h3">
              {this.props.expense.description}
            </label>
          </Link>
          <button onClick={this.onRemove}>Remove</button>
          <span>
            {numeral(this.props.expense.amount / 100).format("0,0.00")} TL -{" "}
            {moment(this.props.expense.createdAt).format("MMMM Do, YYYY")}
          </span>
        </p>
      </div>
    );}
};

const mapDispatchToProps = (dispatch, props) => ({
  removeExpense: (id) => dispatch(startRemoveExpense(id)),
});

export default connect(undefined, mapDispatchToProps)(ExpenseListItem);
