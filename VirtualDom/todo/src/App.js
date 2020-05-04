import React, { Component } from 'react';
import TodoList from './TodoList'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { todos: ['Walk the Dog'], todoText: '' };
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={(event) => {
          event.preventDefault();
          this.setState((prevState, props) => {
            return { todos: [...prevState.todos, prevState.todoText], todoText: '' }
          });
        }}>
          <label>
            Todo:
              <input
              type="text"
              name="todoText"
              value={this.state.todoText}
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
