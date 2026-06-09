import React, {useState} from "react"

function Counter() {

    const [count, setCount] = useState(5);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment the count</button>
            <button onClick={decrement}>Decrement the count</button>
            <button onClick={reset}>Reset the count</button>
        </div>
    )


}

export default Counter