import { ADD_TODO, REMOVE_TODO } from './actions'

export const initialState = {
    todos: [],
    id: 1
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            var updatedState = { ...state };
            updatedState.id++;
            return {
                ...updatedState,
                todos: [...updatedState.todos, { task: action.task, id: updatedState.id }]
            };
        case REMOVE_TODO:
            let todos = state.todos.filter(val => val.id !== action.id);
            return {
                ...state, todos
            };
    }

    return state;
};