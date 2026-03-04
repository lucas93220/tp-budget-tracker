import React from "react";
function Balance({ transactions }) {

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div>

      <h2>Solde : {balance} €</h2>

      <p>Revenus : {income} €</p>

      <p>Dépenses : {expense} €</p>

    </div>
  );
}

export default Balance;