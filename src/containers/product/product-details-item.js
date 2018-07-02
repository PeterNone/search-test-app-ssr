import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import ProductDetailsItemPrice from './product-details-item-price';
import AlertPreloader from '../../components/alert-preloader';


class ProductDetailsItem extends PureComponent {
	
	onClickHandler = () => {
		this.props.history.goBack();
	};
	
	renderItem = (item) => {
		if(!item) {
			return (
				<div className="col-xs-12">
					<AlertPreloader message="Loading..." colour="success" />
				</div>
			);
		} else {
			const divStyle = {
				backgroundImage: `url(${item.image_url})`
			};
			
			return (
				<div className="thumbnail" >
					
					<div className="col-xs-12 col-sm-6 col-sm-push-6">
						<div className="thumbnail-image-bg" style={divStyle}></div>
					</div>
					
					<div className="col-xs-12 col-sm-6 col-sm-pull-6">
						
						<h2 className="m-b-md">
							<Link to={`/search/${item.brand}`}>{item.brand}</Link> - {item.product_name}
						</h2>
						
						<ol className="breadcrumb">
							{item.ps_category.split(' > ').map(x => {
								let res;
								if(x.trim() !== '' && x !== '-') {
									res = <li key={x}><Link to={`/search/${x}`}>{x}</Link></li>; 
								}
								return res;
							})}
						</ol>
						
						<h4 className="m-b-md">
							<span className="small">Price:</span> 
							<span className="text-primary"> £{parseFloat(item.price).toFixed(2)}</span> <ProductDetailsItemPrice data={item.price_history} />
						</h4>
						
						<h4 className="m-b-xs"><span className="small">Description:</span></h4>
						
						<div className="m-b-md">{item.description}</div >
					</div >
					<div className="clearfix"></div>
				</div >
			);
		}
	}
	
	
	render() {
		const item = this.props.item;
		
		
		return (
			<div className="col-xs-12">

				<div className="m-t-md m-b-md">
					<h2 className="m-t-0">
						<button className="btn btn-primary m-r-md"
							onClick={this.onClickHandler}>
							<span className="glyphicon glyphicon-menu-left"></span>
							Back
					</button>
					Product Details</h2>
				</div>
				
				{this.renderItem(item)}
				
			</div>
		);
	}
}

export default withRouter(ProductDetailsItem);
