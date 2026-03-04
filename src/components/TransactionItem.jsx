import React from "react";
function TransactionItem({ transaction, deleteTransaction }) {

  return (
    <div className="transaction">

      <span>{transaction.title}</span>

      <span>{transaction.amount} €</span>

      <span>{transaction.type}</span>

      <span>{transaction.date}</span>

      <button onClick={() => deleteTransaction(transaction.id)}>
        ❌
      </button>

    </div>
  );
}

export default TransactionItem;