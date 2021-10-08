import React from "react"
import '../cssfiles/counter.css'

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
       <span className='span'>{counter}</span>

       <br/>
        <button onClick={increment}>
            up
        </button>
        <button onClick={decrement}>
            down
        </button></>)
}
export default Counter