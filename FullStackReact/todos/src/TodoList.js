import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const API_URL = 'http://localhost:3001/api/todos'

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = { todos: [] }
        this.addTodo = this.addTodo.bind(this);
    }

    componentDidMount() {
        fetch(API_URL)
            .then(data => data.json())
            .then(todos => this.setState({ todos }))
    }

    addTodo(val) {
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({ name: val }),
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
            .then(data => data.json())
            .then(newTodo => this.setState({ todos: [...this.state.todos, newTodo] }))
    }

    toggleTodo(todo) {
        const updateURL = API_URL + `/${todo._id}`
        fetch(updateURL, {
            method: 'PUT',
            body: JSON.stringify({ completed: !todo.completed }),
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
            .then(data => data.json())
            .then(updatedTodo => {
                const todos = this.state.todos.map(t => {
                    return t._id === updatedTodo._id ? updatedTodo : t
                })
                this.setState({ todos })
            })
    }

    render() {
        const todos = this.state.todos.map((t) => {
            return <TodoItem key={t._id} {...t} onToggle={this.toggleTodo.bind(this, t)} />
        });

        return (
            <div className="list">
                <TodoForm addTodo={this.addTodo} />
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;