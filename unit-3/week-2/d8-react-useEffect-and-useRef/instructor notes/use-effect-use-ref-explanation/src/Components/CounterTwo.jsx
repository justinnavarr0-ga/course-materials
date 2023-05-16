import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        //This will be called when the component is mounted
        console.log('Component mounted');

        //This will be called when the component is unmounted 
        return () => {
        console.log('Component unmounted');;
        };
    }, []);

    useEffect(() => {
        //This will be called every time the count state changes 
        console.log(`Count is now ${count}`);
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment count</button>
        </div>
    );
}

export default Counter;
