import React, { useState } from 'react'

const InputForm = (props) => {
    const [uniqueId, setUniqueId] = useState('');
    const[dish, setDish] = useState('');
    const [price, setPrice] = useState('');
    const [table, setTable] = useState(1);
    
    const uniqueIdHandler = (event) => {
        setUniqueId(event.target.value)
    }

    const dishHandler = (event) => {
        setDish(event.target.value)
    }

    const priceHandler = (event) => {
        setPrice(event.target.value)
    }
    const tableHandler = (event) => {
        setTable(event.target.value)
    }
    const GetItemHandler = (e) => {
        e.preventDefault();
        props.sendList(uniqueId, price, dish, table);
        setUniqueId('');
        setDish('');
        setPrice('');
        setTable(1);
    }

  return (
    <form onSubmit={GetItemHandler}>
        <label htmlFor="">Unique Id</label>
        <br />
        <input type="text" onChange={uniqueIdHandler} value={uniqueId}/>
        <br />
        
        <label htmlFor="">Choose Dish</label>
        <br />
        <input type="text" onChange={dishHandler} value={dish}/>
        <br />
      
        <label htmlFor="">Price</label>
        <br />
        <input type="text" name="" id=""onChange={priceHandler} value={price} />
        <br />
        <br />
        <select name="" id="" onChange={tableHandler} value={table}>
            <option value="1">Table 1</option>
            <option value="2">Table 2</option>
            <option value="3">Table 3</option>
        </select>
        <br />
        <br />
        <button>Confirm Order</button>
    </form>
  )
}

export default InputForm