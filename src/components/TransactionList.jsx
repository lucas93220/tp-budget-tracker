import TransactionItem from "./TransactionItem";
import React from "react";
function TransactionList({ transactions, deleteTransaction }) {

  return (
    <div>
      <h2>Transactions</h2>

      {transactions.map((t) => (
        <TransactionItem
          key={t.id}
          transaction={t}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </div>
  );
}

export default TransactionList;