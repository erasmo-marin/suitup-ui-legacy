import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, NotFoundRoute } from 'react-router';
import { browserHistory } from 'react-router';
import Index from './pages/index';

class Routes extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (<Router history={browserHistory}>
					<Route path="/" component={ Index }>
			        </Route>
					<Route path="/suitup-toolkit-website" component={ Index }>
			        </Route>
				</Router>);
	}
}

export default Routes;