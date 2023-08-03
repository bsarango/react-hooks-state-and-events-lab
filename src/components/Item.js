import React, { useState } from "react";

function Item({ name, category }) {
  const[itemAdded,setItem]=useState(false)
  const itemClass = itemAdded ? "in-cart":"";

  const buttonMessage = itemAdded ? "Remove From Cart":"Add to Cart"
  function handleSettingItem(){
    setItem((itemAdded)=>!itemAdded)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleSettingItem} className="add">{buttonMessage}</button>
    </li>
  );
}

export default Item;
