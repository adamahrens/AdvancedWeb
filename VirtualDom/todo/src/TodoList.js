import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    const todos = props.todos.map((todo, index) => {
        return <Todo key={index} title={todo} />
    });

    if (todos.length == 0) {
        return <h1>Add a Todo</h1>
    } else {
        return <ul>{todos}</ul>
    }
};

export default TodoList;