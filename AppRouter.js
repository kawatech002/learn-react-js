import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import Navigation from './navigation'

function AppRouter () {
    return(
        <Router>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            </Switch>
        </Router>
    );
}

export default AppRouter;