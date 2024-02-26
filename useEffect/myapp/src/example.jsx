// useEffect(function, [dependencies])

import React, { useState, useEffect } from 'react';

function Example() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // useEffect is needed when it re-renders
    // if you use without useEffect, it will automatically add a lof of event listeners
    // so that is why we need to use useEffect in this case.
    useEffect(() => {
        // window.addEventListener(event, function);
        window.addEventListener('resize', handleResize);
        console.log('resized + added event listener');

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('removed event listener');
        }

        }, []);

    // function for resizing window
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

    }

    // create another useEffect hook
      useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    return (
        <>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </>
    );
}

export default Example;
