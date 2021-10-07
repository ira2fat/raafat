import React from "react";
import Counter from "./components/counter";
import Header from "./components/header";
import Video from "./video";

export default function App() {

  return (
    <><Header link="https://t4.ftcdn.net/jpg/02/76/08/07/360_F_276080724_hltnCyDjcqAyRtLzDYo3T2jXbBtCD7fl.jpg" />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Video />





      </div>
      <div style ={{display:'flex',justifyContent:'center',alignItems:'center',height:'30vh'}}>
        <Counter />
      </div>
      <footer style={{ position: "fixed", bottom: "0px", fontSize: "large" }}>
        Copyright &#169; Bosch.IO
      </footer></>

  )
}