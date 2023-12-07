import React from 'react'

const Table3 = () => {
    
    const tableThreeItems = JSON.parse(localStorage.getItem("ITEMS")).filter(item => item.Table == 3);
    
    return (
    <div>
      <div>
      <h2>
        Table3
      </h2>
       {tableThreeItems.map(item => (
        <li>Order ID: {item.UID}  Dish : {item.Dish}  Price : {item.Price} 
        <button>Delete</button>
        </li>
       ))} 
      </div>
         
      </div>
  )
}

export default Table3