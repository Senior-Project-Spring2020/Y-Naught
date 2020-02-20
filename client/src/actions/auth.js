import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR
} from './types';
import setAuthToken from '../utils/setAuthToken'

//LOAD USER
export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try{
        const res = await axios.get('/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err){
        dispatch({
            type: AUTH_ERROR
        });
    }
}


export const registerFunc = ({email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password});

    try{
        const res = await axios.post('/Users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    }
    catch (err) {
        dispatch({
            type: REGISTER_FAIL
        });
    }
};
