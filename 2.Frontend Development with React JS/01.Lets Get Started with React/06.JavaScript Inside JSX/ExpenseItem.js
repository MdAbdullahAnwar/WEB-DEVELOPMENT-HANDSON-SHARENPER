// Write yoour code at relevant places in the code below:

import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 7, 15).toISOString();
  const expenseLocation = "Bangalore";
  const expenseTitle = "Insurance";
  const expenseAmount = 50;

  return (
    <div className="expense-item">
      <div className="expense-item__location">{expenseDate}</div>
      <div>{expenseLocation}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;