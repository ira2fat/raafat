import React from "react";
import Counter from "./components/counter/counter";
import Header from "./header/header";
import Video from "./components/video/video";
import Comment from "./components/comment/comment";
import { Container } from "@material-ui/core";

export default function App() {

  return (
    <div style={{textAlign:'center', margin:'0', padding:'0'}}>
      
        <Header link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREwVpQzae9C6HQ1OTVZ_Pe4n_zYkzxxJIX0w&usqp=CAU" style={{height:'20px'}} />
        <div alt="content">
      <Video    />
      <Comment/>
      <Counter  />
      </div>
        <footer style={{textAlign:'end'}}>
          Copyright &#169; Bosch.IO
        </footer >
    </div>

  )
}