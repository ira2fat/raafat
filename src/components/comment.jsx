import React from "react";

export default function Comment() {
    let [save,setSave]=React.useState("");
    let[rafat,setRafat]=React.useState([]);

const handlechange=(event)=>{

    setSave(event.target.value)

}
    const comments=()=>{  
        setRafat(rafat ,<div>{save}</div>)
    }
    return (
    <>

    <span>
        {rafat}
     </span>
     <input type="text"onChange={handlechange}/>
    
        <button onClick={comments}>Comment</button>
        </>
        )

}
