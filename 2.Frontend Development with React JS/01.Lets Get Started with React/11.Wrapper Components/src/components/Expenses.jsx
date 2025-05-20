// Write your code here
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  return (
    <div clasName="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            id={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    </div>
  )
}
export default Expenses;