import React, { useState, useRef, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(0);
    const [timerDuration, setTimerDuration] = useState(1000);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
        }, timerDuration);

        return () => clearInterval(intervalRef.current);
    }, [timerDuration]);

    const handleTimerDurationChange = (event) => {
        setTimerDuration(parseInt(event.target.value));
    };

    return (
        <div>
        <p>Count: {count}</p>
        <input
            type="number"
            value={timerDuration}
            onChange={handleTimerDurationChange}
        />
        </div>
    );
    }

export default Timer;