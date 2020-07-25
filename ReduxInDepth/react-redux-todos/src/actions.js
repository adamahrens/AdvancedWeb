export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

// Functions that return objects
// Use when we connect react and redux
export function addTodo(task) {
    return {
        key: ADD_TODO,
        task
    }
}

export function removeTodo(id) {
    return {
        key: REMOVE_TODO,
        id
    }
}