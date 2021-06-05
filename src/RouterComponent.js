import React from 'react'
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import Characters from './components/Characters';
import Episodes from './components/Episodes';
import Locations from './components/Locations';
import Layout from './layout/Home'
export default function RouterComponent() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Characters/>
                    </Route>
                    <Route exact path="/locations">
                        <Locations/>
                    </Route>
                    <Route exact path="/episodes">
                        <Episodes/>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    )
}
