import React from 'react';
import { Link } from "react-router-dom";

import SearchForm from './search-form';

const SearchNav = () => {
	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container">

				<div className="navbar-header">
					<Link to="/" className="navbar-brand">
						<img src="/ps-badge.svg" className="ps-logo m-b-md" alt="PriceSearcher" />
					</Link>
				</div>
				
				<div className="navbar-form navbar-right">
					<SearchForm />
				</div>
				
			</div>
		</nav>
	);
};


export default SearchNav;
