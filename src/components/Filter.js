import React, {useState } from "react";

function Filter({ handleCategoryChange }) {
  // {/* capture input value in state */}
  const [formValue, setFormValue ] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    console.log(formValue, "FORM VALUE FROM FILTER HANDLE SUBMIT!");

    handleCategoryChange(formValue)

  }
    function handleFormChange(event){
        setFormValue(event.target.value);
    }

   
  return (
    <div className="Filter">
      <form onSubmit={handleSubmit}>
        <input type="text" 
                name="search" 
                placeholder="Search..." 
                value={formValue} 
                onChange={handleFormChange} 
                 />
        <button type="submit">SUBMIT!</button>
      </form>
      {/* <div onSubmit={handleSubmit}> */}
        <select name="filter" onChange={handleFormChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      {/* </div> */}
    </div>
  );
}

export default Filter;
