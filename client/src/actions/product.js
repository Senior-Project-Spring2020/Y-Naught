import axios from 'axios';
import { GET_PRODUCT, GET_PRODUCTS, PRODUCT_ERROR } from './types';

//Create Product
export const product = (formData, history, edit = false) => async dispatch => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('/Products', formData, config);

        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        });

        if(!edit){
            history.push('/home')
        }

    } catch(err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }

}

    //Get All Products
    export const getProducts = () => async dispatch => {
        
        try{
            const res = await axios.get('/Products');
    
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });
    
        } catch(err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    
    }

    //Get Profile By ID
    export const getProductByID = id => async dispatch => {
        
        try{
            const res = await axios.get(`/Products/${id}`);
    
            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            });
    
        } catch(err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    
    }
