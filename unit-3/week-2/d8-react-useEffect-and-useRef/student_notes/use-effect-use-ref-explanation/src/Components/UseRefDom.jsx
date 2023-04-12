import React, { useEffect, useRef } from 'react';

function InputWithFocusButton() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
        <input ref={inputRef} type="text" />
        <button>Submit</button>
        </>
    );
}

export default InputWithFocusButton; 


//useRef is designed to store the reference of an element, doesn't re-render
//Can use to store past state and values
//However was designed to manipulate the dom 


//Without useRef

// import React, { useState, useEffect } from 'react';

//     function MyInput() {
//     const [value, setValue] = useState('');

//     useEffect(() => {
//         const inputElement = document.getElementById('my-input');
//         if (inputElement) {
//         inputElement.focus();
//         }
//     }, [value]);

//     return (
//         <input id="my-input" type="text" value={value} onChange={e => setValue(e.target.value)} tabIndex="0" />
//     );
//     }

// export default MyInput;