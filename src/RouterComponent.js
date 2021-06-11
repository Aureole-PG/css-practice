import React from 'react'
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import Character from './views/Character';
import Characters from './views/Characters';
import Episodes from './views/Episodes';
import Locations from './views/Locations';
import Layout from './layout/Home';
import Episode from './views/Episode';
import Location from './views/Location';
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
                    <Route  exact path="/episodes">
                        <Episodes/>
                    </Route>
                    <Route  path="/caracters/:character">
                        <Character/>
                    </Route>
                    <Route  path="/episodes/:episode">
                        <Episode/>
                    </Route>
                    <Route path="/locations/:location">
                        <Location/>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    )
}
