import React from "react"


function Counter() {

    let [counter, setCounter] = React.useState(0)

    const increment = () => {
        setCounter(++counter)

    }
    const decrement = () => {
        if (counter > 0) {
            setCounter(--counter)
        }
    }
    return (<>
       <span style={{color:'blue',fontSize:40, display:'inline-block',border: '2px solid black'}}>{counter}</span>

       <br/>
        <button onClick={increment}>
            up
        </button>
        <button onClick={decrement}>
            down
        </button></>)
}
export default Counter