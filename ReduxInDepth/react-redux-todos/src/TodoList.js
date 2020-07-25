import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm'
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    addTodo(val) {
        console.log('Want to add todo ' + val);
    }

    render() {
        let todos = this.state.todos.map((todo, key) =>
            <Todo task={todo} key={key}></Todo>
        )
        return (
            <div>
                <TodoForm addTodo={this.addTodo} />
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default connect()(TodoList);