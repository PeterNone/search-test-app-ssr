import { FETCH_RESULTS, RESET_RESULTS } from '../actions/types';

const getParameterByName = (name, url) => {
	if (!url) url = window.location.href;
	// eslint-disable-next-line
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function (state = '', action) {
	switch (action.type) {
		case FETCH_RESULTS:
			return getParameterByName('q', action.payload.config.url);
			
		case RESET_RESULTS:
			return '';

		default:
			return state;
	}
}