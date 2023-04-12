import React, { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import CounterTwo from './Components/CounterTwo';

function App() {
  const [showComponent, setShowComponent] = useState(true);

  const handleToggle = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div className="App">
      {showComponent && <CounterTwo />}
      <button onClick={handleToggle}>
        {showComponent ? 'Hide component' : 'Show component'}
      </button>
    </div>
  );
}

export default App;