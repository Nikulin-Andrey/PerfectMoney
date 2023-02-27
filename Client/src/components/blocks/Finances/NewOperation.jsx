import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  InputNumber,
  Radio,
  Modal,
  Select,
} from 'antd'

import { SPENDING_CATEGORYES, INCOME_CATEGORYES } from '@/constants'
import { addOperationAction } from '@/actions'
import { Container } from './styles'

const options = [
  { label: 'Расходы', value: 'spending' },
  { label: 'Доходы', value: 'income' },
]

const NewOperation = ({
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  const dispatch = useDispatch()

  const [amount, setAmount] = useState(900)
  const [type, setType] = useState('spending')
  const [category, setCategory] = useState(SPENDING_CATEGORYES[0].value)

  const handleChangeAmount = value => setAmount(value)
  const handleChangeType = ({ target: { value } }) => {
    setType(value)
  }
  const handleChangeCategory = value => setCategory(value)

  const handleAddOperation = () => {
    dispatch(addOperationAction({
      amount,
      type,
      category,
    }))
    handleOk()
  }

  return (
    <Modal
      title="Добавление операции"
      open={isModalOpen}
      onOk={handleAddOperation}
      onCancel={handleCancel}
    >
      <Container>
        <InputNumber
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          value={ amount }
          onChange={ handleChangeAmount }
          size="large"
          style={ { marginBottom: 12 } }
        />
        <Radio.Group
          options={options}
          onChange={handleChangeType}
          value={type}
          optionType="button"
          buttonStyle="solid"
          style={ { marginBottom: 12 } }

        />
        <Select
          style={{ width: 120 }}
          onChange={handleChangeCategory}
          value={category}
          options={ type === 'spending' ? SPENDING_CATEGORYES : INCOME_CATEGORYES }
        />
      </Container>
    </Modal>
  )
}

export default NewOperation
