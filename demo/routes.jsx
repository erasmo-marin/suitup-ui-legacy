import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Layout from './pages/layout';
import Landing from './pages/Landing';
import Docs from './pages/Docs';

class Routes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Router>
                    <Layout>
                        <Route exact path="/" component={ Landing }/>
                        <Route path="/:folder/:file" component={ Docs } />
                    </Layout>
                </Router>);
    }
}

export default Routes;