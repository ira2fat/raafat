import React from "react";
export default function App(){
const raafat =(event)=>{
  console.log(event.value)
  alert("Hello",event.target.value)

}
  return (
  <><h1>Mohamed Raafat</h1><form onSubmit={raafat}>

      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form></>
    )
} 