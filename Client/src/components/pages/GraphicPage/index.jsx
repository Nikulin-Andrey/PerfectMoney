import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Pie } from '@ant-design/plots'
import { SPENDING_CATEGORYES } from '@/constants'

const data = [
  {
    type: '分类一',
    value: 27,
  },
  {
    type: '分类二',
    value: 25,
  },
  {
    type: '分类三',
    value: 18,
  },
  {
    type: '分类四',
    value: 15,
  },
  {
    type: '分类五',
    value: 10,
  },
  {
    type: '其他',
    value: 5,
  },
]

const GraphicPage = () => {
  const operations = useSelector(state => state.user.operations)
  const data = SPENDING_CATEGORYES.map(item => ({
    type: item.label,
    value: operations.reduce((acc, operation) => operation.category === item.value ? acc + operation.amount : acc, 0),
  }))
  console.log(data)

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  }

  return (
    <Pie {...config} />
  )
}

export default GraphicPage
