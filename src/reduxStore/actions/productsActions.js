import * as actionTypes from './actionTypes';

// set loader state
export const fetchProductsStart = () => {
	return { type: actionTypes.FETCH_PRODUCTS_START };
};

export const fetchProductsFail = (error) => {
	return { type: actionTypes.FETCH_PRODUCTS_FAIL, error: error };
};

export const fetchProductsSuccess = (data) => {
	return {
		type: actionTypes.FETCH_PRODUCTS_SUCCESS,
		payload: data
	};
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProducts = () => {
	return async (dispatch) => {
		dispatch(fetchProductsStart());
		try {
			await sleep(2000); // fake api call
			const data = [1, 2, 3, 4];
			dispatch(fetchProductsSuccess(data));
		} catch (error) {
			dispatch(fetchProductsFail(error));
		}
	};
};
