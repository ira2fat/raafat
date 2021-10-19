import React from "react"

import {Button} from "@material-ui/core/";

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
    return (<div style={{textAlign:'center' ,margin:'20px 0px'}}>
        <Button alt="up" variant="contained" color="secondary" size="small" onClick={increment}>
            up
        </Button>
        <span style={{textAlign:'center' ,margin:'0px 15px'}}>{counter}</span>
        <Button alt="down" variant ="contained" color="secondary" size="small" onClick={decrement}>
            down
        </Button>
        </div>
        )
}
export default Counter