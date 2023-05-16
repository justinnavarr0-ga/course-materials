import React, { useState, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
        }, 1000);

        // This function will be called when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
        <p>Count: {count}</p>
        </div>
    );
}

export default Timer;
