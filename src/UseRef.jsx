// useState => Re-renders the component when the state value changes

// useRef() => "use Reference" Does not re-renders when its value changes. 
// when u want a component to "remeber" some information,
// but u don't want that information to trigger new renders.

// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing timers and intervals 

// useRef returns a ref object with a single current property initally set to the initial value you provided

import React, {useState, useRef, useEffect} from "react";

function UseRef(){
    
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("Component Rendered")
        console.log(inputRef)
    });

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

    return(
        <>

            <button onClick={handleClick}>
                click Me 
            </button>
            <input ref={inputRef}/>
        </>
    )
}
export default UseRef