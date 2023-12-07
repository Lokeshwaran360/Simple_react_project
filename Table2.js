import React from 'react'

const Table2 = () => {
   const tableTwoItems = JSON.parse(localStorage.getItem("ITEMS")).filter(item => item.Table == 2);
  return (
    <div>
      <div>
      <h2>
        Table2
      </h2>
       {tableTwoItems.map(item => (
        <li>Order ID: {item.UID}  Dish : {item.Dish}  Price : {item.Price} 
        <button>Delete</button>
        </li>
       ))} 
      </div>
         
      </div>
  )
}

export default Table2