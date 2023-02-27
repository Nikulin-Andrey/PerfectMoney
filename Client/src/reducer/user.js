import { createReducer } from '@reduxjs/toolkit'

import {
  setUserAction,
  logOutUserAction,
  setOperationsAction,
} from '@/actions'

const initialState = {
  token: null,
  email: null,
  userId: null,
  message: null,
  operations: [],
  amount: 0,
}

const userReducer = createReducer(initialState, builder => {
  builder.addCase(setUserAction, (state, action) => ({
    ...state,
    ...action.payload,
    message: action.payload.message || null,
  }))

  builder.addCase(setOperationsAction, (state, action) => ({
    ...state,
    amount: action.payload.reduce((acc, item) => item.type === 'spending' ? acc - item.amount : acc + item.amount, 0),
    operations: action.payload,
    message: action.payload.message || null,
  }))

  builder.addCase(logOutUserAction, () => initialState)
})

export default userReducer
