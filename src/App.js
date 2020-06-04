import React from 'react'
import LoginPage from './views/LoginPage'
import {Switch, Route, Redirect} from 'react-router-dom'
import ErrorPage from './views/ErrorPage'

const App = () => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => <LoginPage />}
      />
      <Route path='/404' component={ErrorPage} />
      <Redirect from='*' to='/404' />
    </Switch>
  )
}

export default App
