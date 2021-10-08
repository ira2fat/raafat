import React from "react";
import Counter from "./components/counter";
import Header from "./components/header";
import Video from "./components/video";
import Comment from "./components/comment";
import 'typeface-roboto';
import './cssfiles/footer.css';
import './cssfiles/header.css';
export default function App() {

  return (
    <><Header link="https://t4.ftcdn.net/jpg/02/76/08/07/360_F_276080724_hltnCyDjcqAyRtLzDYo3T2jXbBtCD7fl.jpg" />
      <div className='div' >
        <Video />

      </div>
      <Comment/>
      <div className='counter' >
        <Counter />
      </div>
      <footer className='footer'>
        Copyright &#169; Bosch.IO
      </footer></>

  )
}