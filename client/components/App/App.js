import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from '../NotFound/NotFound'
import Login from '../Login/Login'
import Header from '../Header/Header'
import Signup from '../Signup/Signup'
import Dashboard from '../Dashboard/Dashboard'
import RequireAuth from '../RequireAuth/RequireAuth'

const MainPage = () => (
  <></>
)

const App = () => (
  <>
    <Header/>
    <Switch>
      <Route component={MainPage} path='/' exact/>
      <Route component={Login} path='/login'/>
      <Route component={Signup} path='/signup'/>
      <Route component={RequireAuth(Dashboard)} path='/dashboard'/>
      <Route path='*' component={NotFound}/>
    </Switch>
  </>
)

export default App