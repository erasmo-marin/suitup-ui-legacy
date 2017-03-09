import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Landing from './pages/Landing';
import Docs from './pages/Docs';
import FullDemo from './pages'

const Routes = () => (
    <Router>
        <Layout>
            <Route exact path="/" component={ Landing }/>
            <Route path="/fulldemo" component={ FullDemo } onEnter={() => {console.log("onEnter")}} willLeave={() => {console.log("will leave")}} />
            <Route path="/:folder/:file?" component={ Docs } />
        </Layout>
    </Router>
);

export default Routes;