import axios from 'axios';
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    ADMIN_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_SUCCESS,
    LOGOUT,
} from './types';

//LOAD USER
export const loadUser = () => async dispatch => {
    try {
        const res = await axios.get('/auth/user');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

export const loadAdmin = () => async dispatch => {
    try {
        const res = await axios.get('/auth/admin');
        dispatch({
            type: ADMIN_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

export const registerFunc = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/Users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    }
    catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL
        });
    }
};

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/auth/user', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    }
    catch (err) {
        dispatch({
            type: LOGIN_FAIL
        });
    }
};

export const adminLogin = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/auth/admin', body, config);

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadAdmin());
    }
    catch (err) {
        dispatch({
            type: ADMIN_LOGIN_FAIL
        });
    }
};
//LOGOUT
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
};
