import React from 'react';

import { AreaChart, Area } from 'recharts';
import formatDate from '../../common/format_date';


const ProductDetailsItemPrice = (props) => {
	const { data, simple } = props;
	const dataArray = [];
		
	for( let key in data ) {
		dataArray.push( { name: key, price: data[key] } );
	}
	
	if (dataArray.length <= 1) {
		dataArray.push({ name: formatDate(), price: dataArray[0].price } );
	}
	
	const a = dataArray[dataArray.length - 1].price;
	const b = dataArray[dataArray.length - 2].price;
	
	let priceDiff;
	
	if(!isNaN(a) && !isNaN(b)) {
		priceDiff = <span className="small a1glyphicon glyphicon-minus"></span>;	
		
		if(a > b) {
			priceDiff = <span className="text-danger glyphicon glyphicon-menu-up"></span>;
		}	else if(a < b) {
			priceDiff = <span className="text-success glyphicon glyphicon-menu-down"></span>;
		}
	}
	
	const renderChart = (dataArray=[], simple=false) => {
		if(!simple) {
			return (
				<AreaChart width={60} height={36} data={ dataArray } >
					<Area
					type='monotone'
					dataKey='price'
					/>
				</AreaChart>
			);
		}
	}
	
	return (
		<React.Fragment>
			<span>{priceDiff}</span>
			{renderChart(dataArray, simple)}
		</React.Fragment>
	);
};


export default ProductDetailsItemPrice;
