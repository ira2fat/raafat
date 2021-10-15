import React from "react"
import '../cssfiles/counter.css'
import { ArrowUpwardOutlined } from "@material-ui/icons";
import { ArrowDownwardOutlined } from "@material-ui/icons";


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
        <ArrowUpwardOutlined variant ="contained" size="small" onClick={increment}>
            up
        </ArrowUpwardOutlined>
        <ArrowDownwardOutlined variant ="contained"size ="small "onClick={decrement}>
            down
        </ArrowDownwardOutlined></>)
}
export default Counter