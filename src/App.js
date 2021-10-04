import React from "react";
export default function App(){
  const [name,setName]=React.useState("")
const raafat =()=>{
alert(`hello ${name}`);
 
};


const Submit =(event)=>{
  setName (event.target.value);

}

  return (
  <><h1>Greetings</h1><form onSubmit={raafat}>

      <label>
        Name:
        <input onChange={Submit} type="text" name="name" defaultValue={name}/>
      </label>
      <input type="submit" value="Submit" />
    </form> 
    <br/>
  
    <img src="https://media.istockphoto.com/photos/social-network-concept-picture-id1281414200?s=612x612"/>
    </>
    )
} 