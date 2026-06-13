 import React, {useState} from "react"
 
 function Mycomponent_updater() {
 
     const [count, setCount] = useState(5);
 
     const increment = () => {
    
        // setCount(count + 1);
        // setCount(count + 1);

        // Takes the pending state to calculate NEXT state 
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order.

        setCount(c => c + 1);
        setCount(c => c + 1);

     }
 
     const decrement = () => {
        //  setCount(count - 1);

        setCount(c => c - 1);
        setCount(c => c - 1);
     }
     const reset = () => {
         setCount(c => c = 0);
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
 
 export default Mycomponent_updater