import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import './App.css';

import Landingpage from '../landingpage/Landingpage';

const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <div className='App'>
                    <Switch>
                        <Route path='/' component={Landingpage} />
                    </Switch>
                </div>
            </ScrollToTop>
        </Router>
    );
};

export default App;
