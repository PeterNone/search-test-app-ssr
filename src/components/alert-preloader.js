import React from 'react';

const AlertPreloader = (props) => {
	return (
		<div className="col-xs-12">
			<div className={`alert alert-${props.colour}`}>
				<h3 className="text-center m-t-0 m-b-0">
					{props.message}
				</h3>
			</div>
		</div>
	);
};


export default AlertPreloader;
