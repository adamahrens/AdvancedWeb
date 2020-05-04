import React from 'react';
import TodoList from './TodoList'
import './App.css';

function App() {
  const todos = ["Walk The Dog", "Go to the Gym", "Read a Book"]
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
