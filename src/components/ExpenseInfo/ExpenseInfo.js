import React from "react";
import styles from "./ExpenseInfo.module.css";
import {useState, useEffect} from "react";

const ExpenseInfo = (props) => {
  // Add logic here to calculate the grand total, profit and expense amount here

  const [grandTotal, setGrandTotal] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

    useEffect(() => {
      calculateGrandTotal();
      calculateTotalProfit();
      calculateTotalExpense();
    }, [props.expenses]); 

      const calculateGrandTotal = () => {
      const total = props.expenses.reduce((acc, expense) => acc + expense.amount, 0);
      setGrandTotal(total);
      };
      

    const calculateTotalProfit = () => {
      const profit = props.expenses.reduce((acc, expense) => 
        expense.amount > 0 ? acc + expense.amount : acc
      ,0);
     setTotalProfit(profit);
    };

    const calculateTotalExpense = () => {
      const expense = props.expenses.reduce((acc, expense) => 
        expense.amount < 0 ? acc + expense.amount : acc
      ,0);
      setTotalExpense(expense);
    };

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        {/* <h1>$Grand total should be displayed here</h1> */}
        <h1> {grandTotal} </h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            {/* +$Total Profit Amount should be displayed here */}
            ${totalProfit}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            {/* -$Total expense amount should be displayed here */}
            ${totalExpense}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;