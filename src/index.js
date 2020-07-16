import React from "react";
import ReactDOM from "react-dom";
import App, {NavBar} from "./App";
import {useHistory} from "react-router";
import Home from './pages/Home';
import Players from './pages/Players';
import Team from './pages/Team';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/players">
                <Players/>
            </Route>
            <Route exact path="/team">
                <Team/>
            </Route>

        </Switch>
    </Router>,
    document.getElementById("root")
);