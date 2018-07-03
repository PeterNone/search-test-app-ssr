import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router, matchPath } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import routes from './../../src/routes';
import reducers from './../../src/reducers';
import serialize from 'serialize-javascript';


// import our main App component
import App from '../../src/App';

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
	const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};
	
	const store = createStore(
		reducers,
		applyMiddleware(promise)
	);
	
	const tempPromise = activeRoute.fetchInitialData
	? store.dispatch(activeRoute.fetchInitialData(req.path))
	: Promise.resolve();	
	
	
	tempPromise.then(() => {
		
		// point to the html file created by CRA's build tool
		const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

		fs.readFile(filePath, 'utf8', (err, htmlData) => {
			if (err) {
				console.error('err', err);
				return res.status(404).end()
			}
			
			// render the app as a string
			const html = ReactDOMServer.renderToString(
				<Router location={req.url}>
					<Provider store={store}>
						<App />
					</Provider>
				</Router>
			);
			
			// inject the rendered app into our html and send it
			return res.send(
				htmlData.replace(
					'<div id="root"></div>',
					`<div id="root">${html}</div>`
				).replace(
					'window.__INITIAL_DATA__',
					`window.__INITIAL_DATA__ = ${serialize(store.getState())}`
				)
			);
		});
	}
);
}