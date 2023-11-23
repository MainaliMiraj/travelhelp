import React from "react";
function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        Start adding the items for your journey🎒!
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <div className="stats">
      <footer>
        {percentage === 100 ? (
          "You got everything! Ready to go✈"
        ) : (
          <span>
            💼 You have <span className="details">{numItems}</span> item
            {numItems > 1 ? "(s)" : ""} on your list, and you already packed{" "}
            <span className="details">{numPacked}</span>.
          </span>
        )}
      </footer>
    </div>
  );
}
export default Stats;
