import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme, Button } from 'antd'

import AuthButton from '@/components/common/AuthButton'

const { Header, Sider, Content } = Layout

const BasicLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const history = useHistory()
  const token = useSelector(store => store.user.token)

  const onClick = item => {
    if (token) {
      if (item.key === '1') {
        history.push('/')
      } else {
        history.push('/graphics')
      }
    }
  }

  return (
    <Layout
      style={ { minHeight: '100vh' } }
    >
      <Sider trigger={null}
        collapsible collapsed={collapsed}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={onClick}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Финансы',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Графики',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 12,
            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <AuthButton />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          { children }
        </Content>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
