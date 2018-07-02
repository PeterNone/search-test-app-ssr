import React, { Component } from 'react';
import { connect } from 'react-redux';

import AlertPreloader from './../../components/alert-preloader';
import ProductDetailsItem from './product-details-item';
import SearchNav from '../search/search-nav';
import { fetchProduct, resetProduct } from '../../actions';


class ProductDetails extends Component {
	
	componentDidMount() {
		if (!this.props.item || this.props.item.product_id !== this.props.match.params.id) {
			this.props.resetProduct();
			this.props.fetchProduct(this.props.match.params.id);
		}
	}
	
	
	render() {
		if (!this.props.item) {
			return (
				<div className="full-div">
					<SearchNav />
					<div className="container p-t-xxlg">
						<div className="row">
							<AlertPreloader message="Loading..." colour="success" />
						</div>
					</div>
				</div>
			);
		}
		
		
		return (
			<div className="full-div">
				<SearchNav />
				<div className="container p-t-xxlg">
					<div className="row">
						<ProductDetailsItem item={this.props.item} />
					</div>
				</div>
			</div>
		);
	}
}


//connect props with redux state
const mapStateToProps = (state) => {
	return {
		item: state.product
	};
};


export default connect(mapStateToProps, { fetchProduct, resetProduct })(ProductDetails);

