import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0); 
    
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



//use effect for our three life cycle stages:
//component did mount
//component did update
//component did unmount 
//if there is no dependency array the use effect will run 
//all the time no matter what happens in your component 