import React from "react"
import '../cssfiles/counter.css'
import Button from '@material-ui/core/Button';

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
        <Button variant="contained" color="secondary" size="small" onClick={increment}>
            up
        </Button>
        <Button variant="contained" color="secondary"  size="small"onClick={decrement}>
            down
        </Button></>)
}
export default Counter