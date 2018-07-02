import ProductResult from "../containers/product/product-result";
import productDetails from "../containers/product/product-details";
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
		component: productDetails,
		fetchInitialData: (path = '') => fetchProduct(path.split('/').pop())
	}
]

export default routes;