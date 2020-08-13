import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound'

const App = () => (
  <Switch>
    <Route component={Login} path='/' exact/>
    <Route path='*' component={NotFound}/>
  </Switch>
)

export default App