import React from "react";
function Filter({ setFilter }) {

  return (
    <div>

      <button onClick={() => setFilter("all")}>
        Tous
      </button>

      <button onClick={() => setFilter("income")}>
        Revenus
      </button>

      <button onClick={() => setFilter("expense")}>
        Dépenses
      </button>

    </div>
  );
}

export default Filter;