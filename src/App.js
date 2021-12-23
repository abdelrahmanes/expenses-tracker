import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 450,
    date: new Date(2021, 12, 15),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 231.25,
    date: new Date(2020, 11, 5),
  },
  { id: "e3", title: "New TV", amount: 187.36, date: new Date(2021, 8, 1) },
  {
    id: "e4",
    title: "Wooden Desk",
    amount: 327.29,
    date: new Date(2021, 7, 4),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // const addExpenseHandler = (newExpenseData) => { //for pushing at  the end of the array
  //   setExpenses(DUMMY_EXPENSES.push(newExpenseData));

  //   console.log(newExpenseData);
  // };
  const addExpenseHandler = (expense) => {
    //for pushing the new item at the begining of the array
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
