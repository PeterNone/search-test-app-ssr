import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import reducers from './reducers';
import './styles/index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

let initialState = {};

if(window) {
	initialState = window.__INITIAL_DATA__ || {};
}

const store = createStore(
	reducers,
	initialState,
	applyMiddleware(promise)
);

if (window) {
	window.__INITIAL_DATA__ = null
}

ReactDOM.hydrate(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>, 
document.getElementById('root'));
//registerServiceWorker();
