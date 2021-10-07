import React from "react";
import Counter from "./components/counter";
import Header from "./components/header";
import Video from "./video";

export default function App() {

  return (
    <><Header link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGlly-WC6mU0q6iszakSM6hYFJR4RPhzUxET_WMTmSyFfKDuUnkhvVdWse7zvsjPIWxa0&usqp=CAU" />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Video/>

        <Counter />
      </div>
        <footer style={{ position: "fixed", bottom: "0px" }}>
        Copyright &#169; Bosch.IO
      </footer></>

  )
}