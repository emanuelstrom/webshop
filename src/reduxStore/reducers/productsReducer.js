import * as actionTypes from '../actions/actionTypes';

const initialState = {
	items: [],
	loading: false,
	error: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_PRODUCTS_START:
			return {
				...state,
				error: false,
				loading: true
			};
		case actionTypes.FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				items: action.payload,
				error: false,
				loading: false
			};
		case actionTypes.FETCH_PRODUCTS_FAIL:
			return {
				...state,
				error: action.error,
				loading: false
			};
		default:
			return state;
	}
};

export default reducer;
