import { ADD_PRODUCT_CART, GET_NUM_CART } from '../actions/types';

const initialSate = {
    cartNum: 0,
    cartCost: 0
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            return {
                ...state,
                cartNum: state.cartNum + 1,
                cartCost: state.cartCost 
            }
        case GET_NUM_CART:
            return{
                ...state
            }
        default:
            return state;
    }
}