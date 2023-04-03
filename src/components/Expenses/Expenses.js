import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2021");

  function filterChangeHandler(selectedYear) {
    setEnteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(filterExpenses);

  function filterExpenses(expense) {
    return expense.date.getFullYear().toString() === enteredYear;
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
