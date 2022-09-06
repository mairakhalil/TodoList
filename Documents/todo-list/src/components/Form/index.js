import React, { useState, useEffect } from 'react'

const getDataForms=()=>{
  const data= localStorage.getItem("array")

  if(data){
    return JSON.parse(data);

  }else{
      return[]
    }
  }

export default function Form(props) {
  const [text, setText] = useState("");
  const [array, setArray] = useState(getDataForms());

  const handleSubmit = (event) => {
    if (text !== "") {
      event.preventDefault();
      const AllData = { text: text }
      setArray([...array, AllData]);
      setText("");
    }
    else {
      alert("Please Enter a Valid Input")
    }
  };
  const deleteFunc = (i) => {
    const removeItem = array.filter((ele, index) => {
      return index !== i;
    })
    setArray(removeItem);
  };

  useEffect(()=>{
    localStorage.setItem('array', JSON.stringify(array));
  },[array])

  return (
    <div>
      <form >
        <h4 className="text-center mt-4"><strong>Add Your Input Below</strong></h4>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="addBtn" onClick={handleSubmit}>Add</button>
      </form>
      <h6 className="text-center mt-4">Your Added Text Will Appear Below </h6>
      {array.length>0 && <div>
      {array.map((items, i) => {
        return (<div class="mt-3">
          <div className="inputText-delete">
            <i className="fa fa-close" onClick={() => { deleteFunc(i); }} aria-hidden="true"></i>
            <p className="ml-2">{items.text}</p></div>
        </div>)
      })}
      </div>}

    </div>
  )
}
