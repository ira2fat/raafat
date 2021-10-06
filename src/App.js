import React from "react";
import Counter from "./components/counter";
import Header from "./components/header";

export default function App() {

  return (
    <><Header link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGlly-WC6mU0q6iszakSM6hYFJR4RPhzUxET_WMTmSyFfKDuUnkhvVdWse7zvsjPIWxa0&usqp=CAU" />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jofNR_WkoCE" title="YouTube video player" frameborder="0" style={{ "justify-content": "center" }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Counter />
      </div>
        <footer style={{ position: "fixed", bottom: "0px" }}>
        Copyright &#169; Mohamed ELdakar
      </footer></>

  )
}