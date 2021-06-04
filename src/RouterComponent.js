import React from 'react'
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import Characters from './components/Characters';
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
                </Switch>
            </Layout>
        </Router>
    )
}
