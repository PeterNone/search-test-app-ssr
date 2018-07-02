import { FETCH_RESULTS, RESET_RESULTS } from '../actions/types';

export default function (state = null, action) {
	switch (action.type) {
		case FETCH_RESULTS:
			if (action.payload.data) {
				if(state) {
					return state.concat(action.payload.data);
				} else {
					return action.payload.data;
				}
			} else {
				return state;
			}
		case RESET_RESULTS:
			return null;
			
		default:
			return state;
	}
}