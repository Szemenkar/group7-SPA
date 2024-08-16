import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/api/message')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  const incrementCounter = () => {
    setCount(count + 1);
  };


  return (
    <div className="container">
      <h1>{message}</h1>
      <div className="counter">
        <p>You clicked {count} times</p>
        <button onClick={incrementCounter}>Click me</button>
      </div>
    </div>
  );

}

export default App;
