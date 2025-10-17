import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  // Controlled input state
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce"); // Default value

  function handleSubmit(event) {
    event.preventDefault();

    // Create a new item object
    const newItem = {
      id: uuid(),
      name,
      category,
    };

    // Send new item up to App.js
    onItemFormSubmit(newItem);

    // Reset form fields
    setName("");
    setCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
