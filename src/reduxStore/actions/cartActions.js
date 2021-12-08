import * as actionTypes from './actionTypes';

export const resetCart = () => {
    return { type: actionTypes.RESET_CART }
};

export const calculateTotalCartAmount = () => {};

export const incrementProduct = (payload) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.INCREMENT_PRODUCT, payload:payload });
        //dispatch(calculateTotalCartAmount());

    } 
}

export const decrementProduct = (payload) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.DECREMENT_PRODUCT, payload:payload });
        //dispatch(calculateTotalCartAmount());

    } 
}