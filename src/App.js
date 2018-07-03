import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import routes from './routes';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Route
					render={({ location }) => (
						
					<TransitionGroup className="full-div" 
						appear={true}
						enter={true}
						>
							<CSSTransition 
								key={location.key} 
								classNames="fade" 
								timeout={300}
								>
								<Switch location={location}>
									{routes.map(({ path, exact, component:C, ...rest}) => (
										<Route
											key={path}
											path={path}
											exact={exact}
											render={(props) => (
												<C {...props} {...rest} />
											)}
											/>
										)
									)}
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					)} />
			</div>
		);
	}
}

export default App;
