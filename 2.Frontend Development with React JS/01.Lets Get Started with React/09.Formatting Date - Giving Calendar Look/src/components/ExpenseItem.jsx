// Write your code here
import "./ExpenseItem.css"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ExpenseItem(props) {
  const month = months[props.date.getMonth()];
  const year = props.date.getFullYear();
  const date = props.date.getDate();

  // Format the date to always display two digits (e.g., "01", "02", "10")
  const formattedDate = `${date.toString().padStart(2, '0')}`;

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{formattedDate}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem;