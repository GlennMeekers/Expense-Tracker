import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

  function expenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataHandler} />
    </div>
  );
}

export default NewExpense;
