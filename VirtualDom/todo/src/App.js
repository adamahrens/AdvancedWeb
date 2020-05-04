import React, { Component } from 'react';
import TodoList from './TodoList'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { todos: ['Walk the Dog'], todoText: '' };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(event) {
    event.preventDefault();
    this.setState((prevState, props) => {
      return { todos: [...prevState.todos, prevState.todoText], todoText: '' }
    });
  }

  render() {
    const { todoText } = this.state
    return (
      <div className="App">
        <form onSubmit={this.addTodo}>
          <label>
            Todo:
              <input
              type="text"
              name="todoText"
              placeholder="Add a todo"
              value={todoText}
              onChange={(event) => { this.setState({ [event.target.name]: event.target.value }) }}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
