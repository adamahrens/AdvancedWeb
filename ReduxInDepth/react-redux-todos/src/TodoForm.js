import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = { task: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ task: event.target.value });
    }

    handleSubmit() {
        this.props.addTodo(this.state.task)
        this.setState({ task: '' })
    }

    render() {
        return (
            <div className="form">
                <input id="todoInput" onChange={this.handleChange} type="text" value={this.state.task} />
                <button onClick={this.handleSubmit}>Add Todo</button>
            </div>
        )
    }
}

export default TodoForm;