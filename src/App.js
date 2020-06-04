import React from 'react'
import Layout from './components/Layout'
import {Switch, Route, Redirect} from 'react-router-dom'
import ErrorPage from './views/ErrorPage'

const App = () => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => <Layout />}
      />
      <Route path='/404' component={ErrorPage} />
      <Redirect from='*' to='/404' />
    </Switch>
  )
}

export default App
