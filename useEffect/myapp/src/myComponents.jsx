// useEffect() = React Hook that tells React do some code when (pick one):
// 1. Component re-renders
// 2. Component mounts
// 3. The state of the value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})  // runs every time the component re-renders
// 2. useEffect(() => {}, []) // runs only when the component mounts
// 3. useEffect(() => {}, [value]) // runs only when the value changes

// Uses on:
// 1. Event-Listener
// 2. DOM manipulation
// 3. Subscription (real-time updates)
// 4. Fetching Data from an API
// 5. Clean up when a component umounts

import React, {useState, useEffect} from "react";

function MyComponents() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("blue");

    // useEffect(() => {
    //     document.title = `Count: ${count}`;

    // }, []);

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        // Clean up type code
        // return () => {
        //     document.title = "React App";
        // }

    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "blue" ? "green" : "blue")
    }

    return (<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <button onClick={changeColor}>Change Color</button>
    </>);
}

export default MyComponents;