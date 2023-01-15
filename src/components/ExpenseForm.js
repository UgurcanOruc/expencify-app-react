import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";


export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: undefined,
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDatesChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide description and amount.",
      }));
    } else {
      this.setState(() => ({ error: undefined }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  onRemove = () => {
    this.props.onRemove();
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input"
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        ></input>
        <input
          className="text-input"
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        ></input>
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDatesChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className="text-area"
          placeholder="Add a note for your expense(optional))"
          value={this.state.note}
          onChange={this.onNoteChange}
        ></textarea>
        <div className="form-buttons">
          {this.props.expense ? (
            <button
              type="button"
              className="button button-secondary"
              onClick={this.onRemove}
            >
              Remove
            </button>
          ) : (
            ""
          )}
          <button type="submit" className="button">
            {this.props.expense ? "Save Expense" : "Add Expense"}
          </button>
        </div>
      </form>
    );
  }
}
