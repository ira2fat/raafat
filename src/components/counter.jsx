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
    return (<div>
        <ArrowUpwardOutlined variant="contained" size="small" onClick={increment}>
            up
        </ArrowUpwardOutlined>
        <span >{counter}</span>
        <ArrowDownwardOutlined variant="contained" size="small " onClick={decrement}>
            down
        </ArrowDownwardOutlined>
        </div>
        )
}
export default Counter