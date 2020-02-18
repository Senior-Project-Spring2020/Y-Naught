import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

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
