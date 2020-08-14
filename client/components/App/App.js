import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from '../Main/Main'
import NotFound from '../NotFound/NotFound'
import Login from '../Login/Login'

const App = () => (
  <Switch>
    <Route component={Main} path='/' exact/>
    <Route component={Login} path='/login'/>
    <Route component={Login} path='/signup'/>
    <Route path='*' component={NotFound}/>
  </Switch>
)

export default App