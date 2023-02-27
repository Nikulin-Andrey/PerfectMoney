import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Typography,
  Button,
  Avatar,
  List,
} from 'antd'

import { getOperationsAction } from '@/actions'
import { SPENDING_CATEGORYES, INCOME_CATEGORYES } from '@/constants'

import NewOperation from './NewOperation'
import UpdateOperation from './UpdateOperation'

const getOperData = operations => operations.map(({ type, amount, date, category, _id }) => ({
  title: type === 'spending' ? SPENDING_CATEGORYES.find(el => el.value === category).label : INCOME_CATEGORYES.find(el => el.value === category).label,
  amount,
  date,
  type,
  _id,
})).reverse()

function formatDate (dat) {
  const date = new Date(dat)
  var dd = date.getDate()
  if (dd < 10) dd = '0' + dd

  var mm = date.getMonth() + 1
  if (mm < 10) mm = '0' + mm

  var yy = date.getFullYear() % 100
  if (yy < 10) yy = '0' + yy

  return dd + '.' + mm + '.20' + yy
}

const { Title } = Typography

const Finances = () => {
  const dispatch = useDispatch()
  const { token, operations, amount } = useSelector(store => store.user)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [updateModalId, setUpdateModalId] = useState(null)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleUpdate = () => {
    setUpdateModalId(null)
  }

  const hendleOpenOperation = (e, id) => {
    e.preventDefault()
    setUpdateModalId(id)
    console.log(id)
  }

  useEffect(() => {
    if (token) {
      dispatch(getOperationsAction())
    }
  }, [token])

  return (
    <>
      <Title style={ { fontSize: 56, textAlign: 'center' } }>{amount}$</Title>
      <Container>
        <Button type="primary" onClick={showModal}>Добавить</Button>
      </Container>
      <div
        style={{
          height: 380,
          overflow: 'auto',
          padding: '0 16px',
          border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={getOperData(operations)}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={<a onClick={e => hendleOpenOperation(e, item._id)} href="#">{`${item.type === 'spending' ? '-' : '+'}${item.amount}$ ${item.title}`}</a>}
                description={`${formatDate(item.date)}`}
              />
            </List.Item>
          )}
        />
      </div>
      <NewOperation
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <UpdateOperation
        updateModalId={updateModalId}
        handleOk={handleUpdate}
        handleCancel={handleUpdate}
      />
    </>
  )
}

export default Finances
