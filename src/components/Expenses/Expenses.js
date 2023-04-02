import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
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

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((filteredExpense) => (
      <ExpenseItem
        key={filteredExpense.id}
        title={filteredExpense.title}
        amount={filteredExpense.amount}
        date={filteredExpense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
