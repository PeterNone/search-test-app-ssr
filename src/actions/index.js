import axios from 'axios';

//get const types for actions
import { 
	FETCH_RESULTS, 
	FETCH_PRODUCT, 
	RESET_RESULTS,
	RESET_PRODUCT,
	PRODUCTS_PER_PAGE
 } from './types';

 
//json-server api url, proxy setting in package.json
const ROOT_URL = 'http://localhost:3000/api/data';


//action to search api with axios as middleware
export const startSearch = (value='', url=null) => {
	const request = axios.get(url ? url.next : `${ROOT_URL}?q=${value}&_page=1&_limit=${PRODUCTS_PER_PAGE}` );
	
	return {
		type: FETCH_RESULTS,
		payload: request
	};
};


//action to search api with axios as middleware
export const fetchProduct = (value) => {
	const request = axios.get(`${ROOT_URL}?product_id=${value}`);
	
	if(typeof(window) !== 'undefined') {
		window.scrollTo(0, 0);
	}
	
	return {
		type: FETCH_PRODUCT,
		payload: request
	};
};


export const resetResults = () => {
	if(typeof(window) !== 'undefined') {
		window.scrollTo(0, 0);
	}
	
	return {
		type: RESET_RESULTS
	};
};


export const resetProduct = () => {
	return {
		type: RESET_PRODUCT
	};
};