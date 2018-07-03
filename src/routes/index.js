import ProductResult from "../containers/product/product-result";
import ProductDetails from "../containers/product/product-details";
import SearchContainer from '../containers/search/search-container';

import { startSearch, fetchProduct } from './../actions';

const routes = [
   {
		path: '/search/:search',
		exact: true,
		component: ProductResult,
		fetchInitialData: (path = '') => startSearch(path.split('/').pop())
	},
	{
		path: '/product/:id',
		exact: true,
		component: ProductDetails,
		fetchInitialData: (path = '') => fetchProduct(path.split('/').pop())
	},
	{
		path: '*',
		exact: false,
		component: SearchContainer
	}
]

export default routes;