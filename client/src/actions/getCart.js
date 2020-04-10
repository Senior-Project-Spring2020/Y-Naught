import {GET_NUM_CART} from './types';

export const getNum = () =>{
    return(dispatch) =>{
        console.log("Getting numbers");
        dispatch({
            type:GET_NUM_CART
        });
    }
}