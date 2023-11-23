import React from "react";
import { useState } from "react";

function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, select, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setSelect(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your dream trip?</h3>
      
      <select
        className="pointer"
        value={select}
        onChange={(e) => setSelect(+e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Add items"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="pointer">Add</button>
    </form>
  );
}
export default Form;
