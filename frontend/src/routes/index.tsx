import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Register from '../pages/Register'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
        </Switch>
    </BrowserRouter>
)
