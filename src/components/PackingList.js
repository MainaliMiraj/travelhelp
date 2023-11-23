import React, { useState } from "react";

function PackingList({ items, deleteItem, onToggleItems, onClearList }) {
  // sorting Array
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function clearEverything(){
    onClearList();
  };

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              value={item.packed}
              onChange={() => {
                onToggleItems(item.id);
              }}
            />
            <span>{item.select}</span>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity} {item.description} {item.charger}
              <button onClick={() => deleteItem(item.id)}>❌</button>
            </span>
          </li>
        ))}
      </ul>
      {/* sorting Array */}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="scale">
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={clearEverything} className="scale">clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
