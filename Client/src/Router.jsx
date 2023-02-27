import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Route, Switch, useHistory } from 'react-router-dom'

import MainPage from '@/components/pages/Main'
import BasicLayout from '@/components/layouts/Basic/'
import LogInPage from './components/pages/LoginPage/component'
import GraphicPage from '@/components/pages/GraphicPage'

const Router = () => {
  const history = useHistory()
  const token = useSelector(store => store.user.token)

  useEffect(() => {
    if (!token) {
      history.push('/login')
    }
  }, [token])

  return (
    <BasicLayout>
      <Switch>
        <Route
          path="/"
          exact
          component={MainPage}
        />
        <Route
            path="/login"
            exact
            component={LogInPage}
        />
        <Route
            path="/graphics"
            exact
            component={GraphicPage}
        />
      </Switch>
    </BasicLayout>
  )
}

export default Router
