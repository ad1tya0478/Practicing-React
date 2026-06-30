// useEffect() - React Hook that tells react to do some CODE when (pick one) - 
                    // - This componenet re-renders
                    // - this component mounts 
                    // - The state of a value
                    
// useEffect(function, [dependencies])

// 1. useEffect(() => {})                // Runs after every re-render
// 2. useEffect(() => {}, [])            // Runs only on mount
// 3. useEffect(() => {}, [value])       // Runs on mount + when value changes

// USES 
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, {useEffect, useState} from "react";

function MyCom_UseEffect(){
 
    // 1.
    // const [count, setCount] = useState(0);
    // const [color, setColor] = useState("green");

    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`
    // }, [count, color]);

    // function addcount(){
    //     setCount(c => c + 1);
    // }
    // function Subtractcount(){
    //     setCount(c => c - 1);
    // }
    // function changecolor(){
    //     setColor(c => c === "green" ? "red" : "green")
    // }

    //2.
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    useEffect(() => {
        document.title = `size: ${width} ${height}`
    }, [width, height])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return( 
        // 1.
        // <div>
        //     <p style={{color: color}}>count: {count}</p>
        //     <button onClick={addcount}>Add</button>
        //     <button onClick={Subtractcount}>Subtract</button><br/>
        //     <button onClick={changecolor}>Change Color</button>
        // </div>

        <div>
            <p>Window Width: {width}</p>
            <p>Window Height: {height}</p>
        </div>
    )

}

export default MyCom_UseEffect