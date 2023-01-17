import React, {useState} from 'react'

export default function TextForm(props) {

  const handleClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleChange=(event)=>{
   setText(event.target.value)
  }

  const [text, setText]=useState("Enter your text")

  return (
   <div>
     <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleChange}></textarea>

  <button className="btn btn-success" onClick={handleClick}>Upper case</button>
</div>
    </div>
  )
}
