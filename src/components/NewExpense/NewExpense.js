import React, { useState } from "react";
import "../NewExpense/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const [toggleForm, setForm] = useState(false);
  const toggleFormHandler = () => {
    setForm(!toggleForm);
  };
  return (
    <div className="new-expense">
      {toggleForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          toggleFormHandler={toggleFormHandler}
          toggleForm={toggleForm}
        />
      )}
      {!toggleForm && (
        <div>
          <div onClick={toggleFormHandler}>
            <button>Add new expense</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
