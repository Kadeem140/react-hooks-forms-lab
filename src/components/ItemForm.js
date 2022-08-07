import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";

function ItemForm({ items, addItems}) {
     console.log(items, "Props items" );

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")

   
    function handleNameFormChange(event){
      event.preventDefault()
      setName(event.target.value);
    }
    function handleFormSubmit(event){
      event.preventDefault();
      const newItem = {
        name,
        category,
        id: Math.random()
      } 
      
      addItems(newItem)
      console.log(items, "Item Props 22")
    }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={handleNameFormChange} />
      </label>

      <label>
        Category:
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
