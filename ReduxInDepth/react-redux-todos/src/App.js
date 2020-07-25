import React from 'react';
import TodoList from './TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>todo<span>list</span></h1>
        <h2>A simple todo list build with react & redux</h2>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
