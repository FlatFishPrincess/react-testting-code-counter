import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [ count, setCount ] = useState(0);
  const [ error, setError ] = useState(false);
  
  // useEffect(() => {
  //   if(count === -1 ) {
  //     setIsNegative(true);
  //     setCount(0);
  //   }
  //   if(count > 0) {
  //     setIsNegative(false);
  //   }
  // }, [count]);

  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">The counter is currently&nbsp;</h1>
      <span data-test="count">{count}</span>
      <span data-test="error" className={error ? 'error' : ''}>
        The counter cannot go below 0
      </span>
      <button
        onClick={() => setCount(count + 1)}
        data-test="increment-button"
        >
          Increment Counter
        </button>
        <button
          onClick={() => {
            if(count > 0) {
              setCount(count - 1)
            } else {
              setError(true)
            }
          }}
          data-test="decrement-button"
        >
          Decrement Counter
        </button>
    </div>
  );
}

export default App;
