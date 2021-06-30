import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 3, 28),
  },
  {
    id: 1,
    title: "Home Policy",
    amount: 670,
    date: new Date(2020, 10, 15),
  },
  {
    id: 1,
    title: "Mobile",
    amount: 500,
    date: new Date(2019, 5, 20),
  },
  {
    id: 1,
    title: "Extra Expenses",
    amount: 100,
    date: new Date(2018, 4, 9),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // const [expenses, setExpenses] = useState([]);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
