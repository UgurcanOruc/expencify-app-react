import React from "react";

const EditExpensePage = (props) => {
  return <div>This is from edit expense component for {props.match.params.id}.</div>;
};

export default EditExpensePage;
