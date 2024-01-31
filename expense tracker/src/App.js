import React, { useState } from "react";

import ExpenseForm from "./Components/ExpenseForm";
import ExpenseItems from "./Components/ExpenseItems";

const App = (props) => {
  const Data = [];

  const [DataArray, setDataArray] = useState(Data);
  const [inpProductValue, setinpProductValue] = useState("");
  const [inpAmountValue, setinpAmountValue] = useState("");
  const[isEditing, setEditing] = useState(true);
  // const [editedText, setEditedText] = useState(props.initialText);

  // const [check]

  // const [editItemId, seteditItemId] = useState(null);

  const InpProductChange = (e) => {
    setinpProductValue(e.target.value);
  };

  const InpAmountChange = (e) => {
    setinpAmountValue(e.target.value);
  };

  const SubmitBtn = () => {
    setDataArray([
      ...DataArray,
      { product: inpProductValue, amount: inpAmountValue },
    ]);
    setinpProductValue("");
    setinpAmountValue("");
  };

  const handleDeleteClick = (idx) => {
    const updatedData = DataArray.filter((item, indx) => indx !== idx);
    setDataArray(updatedData);
  };

  const handleEditClick = (ele) => {
    // setEditing(true);

    if( isEditing  ){
      setinpProductValue(ele.product);
      setinpAmountValue(ele.amount);

      setEditing(false)
    }
    else {
      
      setDataArray([
        { product: inpProductValue, amount: inpAmountValue },
      ]);
      setinpProductValue("");
      setinpAmountValue("");
      
      setEditing(true)
    }

  };

  return (
    <div>
      <ExpenseForm
        proValue={inpProductValue}
        amoValue={inpAmountValue}
        InpProductChange={InpProductChange}
        InpAmountChange={InpAmountChange}
        SubmitBtn={SubmitBtn}
        //  amount={amunt} itmm={itm}
      />
      <ExpenseItems
        dta={DataArray}
        DeleteClk={handleDeleteClick}
        EditClk={handleEditClick}
      />
    </div>
  );
};

export default App;
