import React from 'react'
import LinkContainer from './components/LinkContainer'

function App() {
  return (
    <div className="App">
      <LinkContainer />
    </div>
  )
}

export default App
/*import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState("");

  useEffect( () => {
    // Use this to perform API request
    // Use 'fetch' to get our data
    fetch("/api")
    .then(res => {
      return res.json();
    })
    .then(res_data => {
      setData(res_data.message);
      console.log(res_data.message);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data ? data : "Loading..."}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
