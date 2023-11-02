import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((con) => (
        <ExpenseItem
          key={con.id}
          title={con.title}
          amount={con.amount}
          date={con.date}
        />
      ))}
    </ul>
  );
};
