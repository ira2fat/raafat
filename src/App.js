import React from "react";
import Counter from "./components/counter";
import Header from "./components/header";
import Video from "./components/video";
import Comment from "./components/comment";
import './cssfiles/footer.css';
import './cssfiles/header.css';
import './cssfiles/comment.css';

export default function App() {

  return (
    <div style={{textAlign:'center'}}>
      
        <Header link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREwVpQzae9C6HQ1OTVZ_Pe4n_zYkzxxJIX0w&usqp=CAU" style={{height:'20px'}} />
        <div>
      <Video style={{ width:'700px' }}  />
      <Comment />
      <Counter className='counter' />
      </div>
        <footer className='footer'>
          Copyright &#169; Bosch.IO
        </footer>
    </div>

  )
}