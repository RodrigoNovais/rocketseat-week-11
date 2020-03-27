import React from 'react'
import { BrowserRouter, Route, Switch, Redirect, RouteProps } from 'react-router-dom'

import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import NewIncident from '../pages/NewIncident'

export const ProtectedRoute: React.FC<RouteProps> = props => {
    if (!localStorage.getItem('ngoId'))
        return <Route {...props} component={() => <Redirect to={{ pathname: '/' }}/>} />
    else
        return <Route {...props} />
}

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />

            <ProtectedRoute path='/profile' component={Profile} />
            <ProtectedRoute path='/incidents/new' component={NewIncident} />
        </Switch>
    </BrowserRouter>
)
