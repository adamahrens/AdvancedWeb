import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

export default (state = { message: null }, action) => {
    switch (action.type) {
        case ADD_ERROR:
            console.log('Add an error');
            return { ...state, message: action.error };
        case REMOVE_ERROR:
            console.log('Remove an error');
            return { ...state, message: null }
        default:
            console.log('Unknown actione type')
            return state;
    }
}