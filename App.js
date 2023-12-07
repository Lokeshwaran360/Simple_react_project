import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";

function App() {
   const [itemsList, setItemList] = useState(() => {
    const localValues = localStorage.getItem("ITEMS");
    if(localValues === null) return [];
    return JSON.parse(localValues);
   });
   
   
   useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(itemsList));
  }, [itemsList])

  const getItems = (uniqueId, price, dish, table) => {
       setItemList((prevList) => {
          return [...prevList, {"UID" : uniqueId,
                                "Price" : price,
                                "Dish" : dish,
                              "Table" : table,}]

       })
       
  }
  



return(
   <> 
   <InputForm sendList={getItems}/>
   <Table1/>
   <Table2/>
   <Table3/>
    </>
) 
}

export default App;
