import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { startSearch, resetResults } from '../../actions';



class SearchForm extends Component {
	
	componentDidMount() {
		if (!this.props.search || this.props.search !== this.props.match.params.search) {
			this.props.resetResults();
			this.props.startSearch(this.props.match.params.search);
		}
	}
	
	
	renderTextInput(field) {
		//deconstructing values
		const { meta: { touched, error } } = field;

		//determin css error class
		const inputClass = `input-group ${touched && error ? ' has-error' : ''}`;
		
		//determin error
		const displayError = touched && error ? <div className="error-input text-danger small">{error}</div> : '';
		
		//Return field template with error handlers
		return (
			<div className={inputClass}>
				<input
					type="text"
					className="form-control"
					placeholder="Search for..."
					autoComplete="off"
					{...field.input}
				/>
				{displayError}
				<span className="input-group-btn">
					<button className="btn btn-default" type="submit">
						<span className="glyphicon glyphicon-search"></span>
					</button>
				</span>
			</div>
		);
	}
	
	
	onSubmit = (values) => {
		//Calling action creator after success form submition
		if (this.props.match.params.search) {
			this.props.resetResults();
			this.props.startSearch(values.search);
		} 
		
		this.props.history.push(`/search/${values.search}`);
		this.props.reset();
	}
	
	
	render() {
		const { handleSubmit } = this.props;
		
		return (
			<form onSubmit={ handleSubmit(this.onSubmit) }>
				<Field
					name="search"
					component={ this.renderTextInput }
					/>
			</form>
		);
	}
}


//Validating Redux Form
function validate(values) {	
	const errors = {};

	//error checks
	if (!values.search || values.search.trim() === '') {
		errors.search = 'No search text';
	}

	return errors;
}

const mapStateToProps = (state) => {
	return {
		search: state.search
	};
};


//Export with connected action and Form form redux form
export default withRouter( reduxForm({
	validate,	form: 'SearchForm'
})(connect(mapStateToProps, { startSearch, resetResults } )( SearchForm ) ) );
