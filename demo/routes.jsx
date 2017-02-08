import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, NotFoundRoute } from 'react-router';
import { browserHistory } from 'react-router';
import Layout from './pages/layout';
import Landing from './pages/Landing/';

class Routes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Router history={browserHistory}>
                    <Route path="/" component={ Layout }>
                        <IndexRoute component={ Landing } />
                        <Route path="/containers">
                             <IndexRoute component={ Landing } />
                             <Route path="/containers/box" component={ Landing }/>
                             <Route path="/containers/container" component={ Landing }/>
                             <Route path="/containers/layout" component={ Landing }/>
                        </Route>
                    </Route>
                </Router>);
    }
}

export default Routes;