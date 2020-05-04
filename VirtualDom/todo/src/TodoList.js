import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    const todos = props.todos.map((todo, index) => {
        return <Todo key={index} title={todo} />
    });
    return <ul>{todos}</ul>
};

export default TodoList;