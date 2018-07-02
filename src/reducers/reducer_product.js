import { FETCH_PRODUCT, RESET_RESULTS, RESET_PRODUCT } from '../actions/types';


export default function (state = null, action) {
	switch (action.type) {
		case RESET_PRODUCT:
		case RESET_RESULTS:
			return null;
		case FETCH_PRODUCT:
			if (action.payload.data) {
				return action.payload.data[0];
			} else {
				return state;
			}
		default:
			return state;
	}
}