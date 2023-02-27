import React from 'react'
import { Button, Space } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import { BrowserRouter as ReactRouter, Route, Switch, useHistory } from 'react-router-dom'
import { logOutUserAction } from '@/actions'

const App = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const token = useSelector(store => store.user.token)

  const handleAuth = () => {
    if (token) {
      dispatch(logOutUserAction())
    }
  }

  return (
    <Space wrap>
      <Button type="primary" onClick={ handleAuth }>{ token ? 'Выйти' : 'Войти' }</Button>
    </Space>
  )
}
export default App
