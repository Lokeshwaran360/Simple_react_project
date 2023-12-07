import React from 'react'


const Table1 = (props) => {
    const tableOneItems = JSON.parse(localStorage.getItem("ITEMS")).filter(item => item.Table == 1);
    
  return (
     <div>
      <div>
      <h2>
        Table1
      </h2>
       {tableOneItems.map(item => (
        <li>Order ID: {item.UID}  Dish : {item.Dish}  Price : {item.Price} 
        <button>Delete</button>
        </li>
       ))} 
      </div>
         
      </div>
     
    
    
  )
}


export default Table1;