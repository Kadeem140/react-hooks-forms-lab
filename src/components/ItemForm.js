import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";

function ItemForm(props) {
     console.log(props.items, "items props");

    const [newItem, setNewitem] = useState("")

    function handleFormChange(event){
      event.preventDefault()
      setNewitem(event.target.value);
    }
    // function handleFormSubmit(event){
    //   event.preventDefault();
    //   props.items.push(newItem)
    //   console.log(props.items, "Item Props 22")

    // }
  // function addToItemsArray(event){
  //   items.push(event.target.value)
  // }
  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={newItem} onChange={handleFormChange} />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      {/* <button type="submit">Add to List</button> */}
    </form>
  );
}

export default ItemForm;
