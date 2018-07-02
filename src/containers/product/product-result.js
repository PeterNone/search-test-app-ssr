import React, { Component } from 'react';
import ProductResultList from './product-result-list';
import SearchNav from './../search/search-nav';
import ProductresultListNext from './product-result-list-next';


class ProductResult extends Component {	
	
	render() {
		return (
			<div className="full-div">
				<SearchNav />
				<div className="container p-t-xxlg">
					<div className="row">
						<ProductResultList />
						<ProductresultListNext />
					</div>
				</div>
			</div>
		);
	}
}

export default ProductResult;
