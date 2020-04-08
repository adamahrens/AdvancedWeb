import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';

function App() {
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
      </header>
      <Recipe title="Monster Cookie"
        ingredients={['Sugar', 'Peanut Butter', 'Brown Sugar', 'Oats']}
        instructions="Add all the ingredients and mix"
        image="https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3101&q=80"
      />
    </div>
  );
}

export default App;
