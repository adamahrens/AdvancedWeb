import { apiCall } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './errors';

export function setCurrentuser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
}

export function authUser(type, userData) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall('post', `/api/auth/${type}`, userData).then(({ token, ...user }) => {
                localStorage.setItem('jwtToken', token);
                dispatch(setCurrentuser(user));
                dispatch(removeError())
                resolve();
            }).catch(err => {
                dispatch(addError(err))
                reject();
            });
        });
    }
}