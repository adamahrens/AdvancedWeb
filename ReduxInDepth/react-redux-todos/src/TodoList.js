import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm'
import { connect } from 'react-redux';
import { addTodo } from './actions'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(val) {
        console.log('Want to add todo ' + val);
        this.props.addTodo(val)
    }

    render() {
        let todos = this.props.todos.map((val, key) =>
            <Todo task={val.task} key={key}></Todo>
        )
        return (
            <div className="list">
                <ul>
                    {todos}
                </ul>
                <TodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

// Turning redux state to props on the component
function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo })(TodoList);