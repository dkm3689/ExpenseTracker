import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Create function to add an expense

  const addTransaction = (expense) => {
    const newExpense = { ...expense, id:new Date().getTime() };
    setExpenses([ newExpense ,...expenses]);
  };

  // Create function to delete an expense
  const deleteTransaction = ( expenseId ) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== expenseId);
    });
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addTransaction={addTransaction}
                      deleteTransaction={deleteTransaction}
        />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} 
                      deleteTransaction={deleteTransaction}
          />
        </div>
      </div>
    </>
  );
}

export default App;