import React, { Component } from 'react';

const TodoItem = ({ name, completed, onToggle }) => (
    <li onClick={onToggle} className={completed ? 'task done' : 'task'}>{name}</li>
)

export default TodoItem;