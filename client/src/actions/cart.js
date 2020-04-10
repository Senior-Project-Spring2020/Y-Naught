import axios from 'axios';
import { ADD_PRODUCT_CART } from './types';

export const addToCart = () => {
    return (dispatch) =>{
        console.log("adding item to cart")
        dispatch({
            type: ADD_PRODUCT_CART
        });
    }
}