import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./about/About";
// import Contact from "./Contact/Contact";
import Resume from "./resume/Resume";
import Home from "./home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    {/* <Route path="/Contact" component={Contact} /> */}
                    <Route path="/Resume" component={Resume} />
                </Switch>
            </Router>
        )
    }
}