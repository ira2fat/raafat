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
        <br /><span>{counter}</span>

        <button onClick={increment}>
            up
        </button>
        <button onClick={decrement}>
            down
        </button></>)
}
export default Counter