import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResultItem from './product-result-item';
import AlertPreloader from './../../components/alert-preloader';

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { 
	ANIMATION_SPEED, 
	ANIMATION_DELAY, 
	PRODUCTS_PER_PAGE
} from '../../actions/types';


class ProductResultList extends Component {
		
	renderList = (list) => {
		if(list && list.length) {
			return list.slice(0).map((item, index) => {
				return (	
					<CSSTransition
						exit={false}
						key={`${item.product_id}_thumb`}
						classNames="fade-thumb"
						timeout={ANIMATION_SPEED + (index % PRODUCTS_PER_PAGE * ANIMATION_DELAY)}
						>
						<SearchResultItem key={`${item.product_id}`} item={item} index={index % PRODUCTS_PER_PAGE} />
					</CSSTransition>
				)
			})
		}
	}
	
	
	render() {
		let preloader; 
		if (!this.props.list) {
			preloader = <AlertPreloader message="Loading..." colour="success" />
		} else if (!this.props.list.length) {
			preloader = <AlertPreloader message="No Results" colour="info" />
		}
		
		return (
			<React.Fragment>
				{preloader}
				<TransitionGroup>
					{this.renderList(this.props.list)}
				</TransitionGroup>
			</React.Fragment>
		)
	}
}



//connect props with redux state
const mapStateToProps = (state) => {
	return {
		list: state.results
	};
};


export default connect(mapStateToProps)(ProductResultList);
