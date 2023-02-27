import { createAction } from '@reduxjs/toolkit'

import { LOG_IN, SIGN_UP, SET_USER, LOG_OUT_USER, ADD_OPERATION, GET_OPERATIONS, SET_OPERATIONS } from '@/constants'

export const setUserAction = createAction(SET_USER)
export const logOutUserAction = createAction(LOG_OUT_USER)

export const logInAction = createAction(LOG_IN)
export const signUpAction = createAction(SIGN_UP)

export const addOperationAction = createAction(ADD_OPERATION)
export const getOperationsAction = createAction(GET_OPERATIONS)
export const setOperationsAction = createAction(SET_OPERATIONS)
