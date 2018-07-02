import React from 'react';
import { Link } from "react-router-dom";
import { ANIMATION_DELAY } from '../../actions/types';
import ProductDetailsItemPrice from './product-details-item-price';

const ProductResultItem = (props) => {
	const { item, index } = props;
	
	const divStyle = {
		backgroundImage: `url(${item.image_url})`
	}
	
	const style = {
		'transitionDelay': `${index * ANIMATION_DELAY}ms`
	}
	
	return (
		<React.Fragment>
			<div className="col-xs-min-full col-xs-6 col-sm-4 col-md-3 m-t-md"
				style={style}
				>
				<div className="thumbnail">
					<Link to={`/product/${item.product_id}`}>
						<div className="thumbnail-image-bg" style={divStyle}></div>
					</Link>
					<div className="caption">
						<h3 className="caption-header h4 text-center m-b-md m-t-md" title={item.product_name}>{item.product_name}</h3>
						<p className="text-primary h4 text-center">£{parseFloat(item.price).toFixed(2)} <ProductDetailsItemPrice data={item.price_history} simple={true} /></p>
						
						<p className="m-b-0 text-right">
							<Link to={`/product/${item.product_id}`} className="btn btn-primary">
								Full details <span className="glyphicon glyphicon-info-sign"></span>
							</Link>
						</p>
					</div>
				</div>
				
			</div>
			{ index % 4 === 3 ? <div className="clearfix hidden-xs hidden-sm"></div> : '' }
			{ index % 3 === 2 ? <div className="clearfix visible-sm"></div> : '' }
			{ index % 2 === 1 ? <div className="clearfix visible-xs"></div> : '' }
		</React.Fragment>
	);
};


export default ProductResultItem;
