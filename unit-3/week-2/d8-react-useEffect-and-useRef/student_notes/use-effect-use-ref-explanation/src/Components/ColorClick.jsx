import React, { useState, useRef } from 'react';

function ColorButton() {
    //use state to hold the value of the current color
    const [color, setColor] = useState('blue');
    //create a reference to clickCount
    //without useRef, if we used a regular value such as 
    //const clickCount = 0
    //every time the color is updated, we will lose the value
    //of clickCount 
    //useRefer persists the value across renders 
    const clickCount = useRef(0);
    //ClickCount is an object with a current property
    // {current: 0}

    //changes the color of the background based on the 
    //current color 
    const handleClick = () => {
        //updates state, refreshing page 
        setColor(color === 'blue' ? 'green' : 'blue');
        //increments the current property of the useRef object 
        clickCount.current += 1;
    };

    return (
        <div>
        <button style={{ backgroundColor: color }} onClick={handleClick}>
            Change Color
        </button>
        <p>Button clicked {clickCount.current} times.</p>
        </div>
    );
}

export default ColorButton;


// Here, we're using a useRef hook to create a mutable reference to clickCount, 
// which we can increment each time the button is clicked without triggering 
// a re-render of the component. 
// We can then display the current count using the clickCount.current property.

//We wouldn't use clickCount as state here because it doesn't need to trigger a re-render. 
//We only want to keep track of the number of times the button is clicked and display it as text, 
//without affecting the component's rendering or behavior. Using useState to hold the clickCount value would cause 
//unnecessary re-renders every time the button is clicked, as the state value changes and triggers a component update.
//By using useRef, we can persist the value of clickCount across renders without causing a re-render when it's updated.

//Don't rely on this kind of design pattern, this is known as an anti-pattern,
//it goes against what React was set up to do, however it is sometimes necessary