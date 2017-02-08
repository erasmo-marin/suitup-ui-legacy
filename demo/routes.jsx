import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, NotFoundRoute } from 'react-router';
import { browserHistory } from 'react-router';
import Layout from './pages/layout';
import Landing from './pages/Landing';
import Docs from './pages/Docs';

class Routes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Router history={browserHistory}>
                    <Route path="/" component={ Layout }>
                        <IndexRoute component={ Landing } />
                        <Route path="/:folder(/:file)" component={ Docs } />
                        {/*<Route path="/containers">
                             <IndexRoute component={ Landing } />
                             <Route path="/containers/box" component={ Docs }/>
                             <Route path="/containers/container" component={ Landing }/>
                             <Route path="/containers/layout" component={ Landing }/>
                        </Route>
                        <Route path="/components">
                             <IndexRoute component={ Landing } />
                             <Route path="/components/card" component={ Landing }/>
                             <Route path="/components/modal" component={ Landing }/>
                             <Route path="/components/slider" component={ Landing }/>
                        </Route>
                        <Route path="/responsive">
                             <IndexRoute component={ Landing } />
                             <Route path="/responsive/devices" component={ Landing }/>
                        </Route>
                        <Route path="/theming" component={ Landing }/>*/}
                    </Route>
                </Router>);
    }
}

export default Routes;