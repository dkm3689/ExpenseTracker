import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

const ExpenseList = (props) => {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {/* Display transactions here */}
        {props.expenses.map((expense, index) => 
          <Transaction expense={expense} index={index} 
                        deleteTransaction={props.deleteTransaction}
              /> )
        }
      </ul>
    </div>
  );
};

export default ExpenseList;
