import React from 'react';

import SearchForm from './search-form';

const SearchContainer = () => {
	return (
		<div className="display-table container-fluid full-div bg-primary">
			<div className="display-table-row-100">
				<div className="display-table-cell-100">
					<div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
						<div className="row">
							<div className="col-xs-12 text-center">
								<img src="/ps-badge.svg" className="ps-logo m-b-md" alt="PriceSearcher" width="70" height="59" />
							</div>
							<div className="col-xs-12">
								<SearchForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


export default SearchContainer;
