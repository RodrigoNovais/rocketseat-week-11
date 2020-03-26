import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../pages/Login'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Login} />
        </Switch>
    </BrowserRouter>
)