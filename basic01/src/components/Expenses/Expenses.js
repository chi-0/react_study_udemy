import { Card } from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";
import { useState } from "react";

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((con) => (
          <ExpenseItem title={con.title} amount={con.amount} date={con.date} />
        ))}
      </Card>
    </div>
  );
};
