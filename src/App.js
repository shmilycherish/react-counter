import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () =>  {
    return setCount(count +1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <div>
            <button onClick={handleClick}>
              Hello world!
            </button>
            &nbsp;number: {count}
          </div>
      </header>
    </div>
  );
}

export default App;
