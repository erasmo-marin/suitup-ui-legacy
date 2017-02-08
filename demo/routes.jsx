import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Layout from './pages/layout';
import Landing from './pages/Landing/';

const Routes = () => (
        <Router>
            <Layout>
                <Route path="/" component={ Landing }/>
            </Layout>
        </Router>
);

export default Routes;