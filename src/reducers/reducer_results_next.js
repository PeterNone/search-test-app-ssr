import { FETCH_RESULTS, RESET_RESULTS } from '../actions/types';
import parseLink from './../common/parse_link';

export default function (state = null, action) {
	switch (action.type) {
		case FETCH_RESULTS:
			if (action.payload.data) {
				if(typeof(action.payload.request.getResponseHeader) !== 'undefined') {
					return parseLink(action.payload.request.getResponseHeader('Link'));
				} else if (typeof (action.payload.request.res.headers) !== 'undefined') {
					return parseLink(action.payload.request.res.headers['link']);
				} else {
					return null;
				}
			} else {
				return null;
			}
			
		case RESET_RESULTS:
			return null;

		default:
			return state;
	}
}