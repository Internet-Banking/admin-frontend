import React from 'react'
import LoginPage from './views/LoginPage'
import {useSelector} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import ErrorPage from './views/ErrorPage'
import TodoApp from './views/TodoApp'

const App = () => {
  const token = useSelector(state => state.adminCredentials.token)
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => token ? <Redirect to='/employee'/> : <LoginPage />}
      />
      <Route path='/employee' render={() => token ? <TodoApp /> : <Redirect to='/'/>} />
      <Route path='/404' component={ErrorPage} />
      <Redirect from='*' to='/404' />
    </Switch>
  )
}

export default App
