import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd'

import { logInAction } from '@/actions/auth'

const LogInPage = () => {
  const dispatch = useDispatch()

  const history = useHistory()
  const { token, message } = useSelector(store => store.user)

  useEffect(() => {
    if (token) {
      history.push('/')
    }
    if (message) {
      alert(message)
    }
  }, [token, message])

  const onFinish = values => {
    dispatch(logInAction({
      email: values.username,
      password: values.password,
    }))
    console.log('Success:', values)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 7 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Логин"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LogInPage
