import * as actionTypes from './actionTypes';

export const resetCart = () => {
	return { type: actionTypes.RESET_CART };
};

export const calculateTotalCartAmount = () => {
	return (dispatch, getState) => {
		const state = getState();
		const { orders } = state.cart;
		const productPrice = orders.reduce((prev, curr) => {
			const { product, quantity } = curr;
			const price = parseInt(product.price);
			const sum = (prev += price * quantity);
			return sum;
		}, 0);
		const DELIVERY_COST = 39;
		const deliveryFee = productPrice > 500 ? 0 : DELIVERY_COST;

		dispatch({
			type: actionTypes.CALCULATE_TOTAL_CART_AMOUNT,
			productPrice: productPrice,
			deliveryFee: deliveryFee,
			totalPrice: productPrice + deliveryFee
		});
	};
};

export const incrementProduct = (payload) => {
	return (dispatch) => {
		dispatch({ type: actionTypes.INCREMENT_PRODUCT, payload: payload });
		dispatch(calculateTotalCartAmount());
	};
};

export const decrementProduct = (payload) => {
	return (dispatch) => {
		dispatch({ type: actionTypes.DECREMENT_PRODUCT, payload: payload });
		dispatch(calculateTotalCartAmount());
	};
};
