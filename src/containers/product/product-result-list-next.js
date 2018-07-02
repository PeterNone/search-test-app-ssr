import React, { Component } from 'react';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';

import { startSearch } from '../../actions';


class ProductresultListNext extends Component {
	getNext = () => {
		if (this.props.url && this.props.url.last !== this.props.url.next) {	
			this.props.startSearch(null, this.props.url);
		}
	}
	
	render() {
		if (this.props.url && this.props.url.last !== this.props.url.next) {
			return (
				<React.Fragment>
					<div className="clearfix"></div>	
					<div className="m-t-md m-b-lg col-xs-12 col-sm-4 col-sm-offset-4 col-md-6 col-md-offset-3">
						<div 
							className="btn btn-success btn-block"
							>Loading...</div>
					</div>
					<Waypoint
						onEnter={this.getNext}
					/>
				</React.Fragment>
			);
		} else if (this.props.result && this.props.result.length > 0) {
			return (
				<React.Fragment>
					<div className="clearfix"></div>
					<div className="m-t-md m-b-lg col-xs-12 col-sm-4 col-sm-offset-4 col-md-6 col-md-offset-3">
						<div
							className="btn btn-primary btn-block"
						>All products displayed</div>
					</div>
				</React.Fragment>
			);
		} else  {
			return '';
		}
	}
}

const mapStateToProps = (state) => {
	return {
		url: state.resultsNext,
		result: state.results
	};
};


export default connect(mapStateToProps, { startSearch })(ProductresultListNext);
