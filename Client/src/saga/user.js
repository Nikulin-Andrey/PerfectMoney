import { put, call, takeLatest, select } from 'redux-saga/effects'

import { setUserAction, setOperationsAction, getOperationsAction } from '@/actions'
import { LOG_IN, ADD_OPERATION, GET_OPERATIONS } from '@/constants'

function * watchExample (action) {
  try {
    const data = yield call(() => {
      return fetch('api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ ...action.payload }),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(response => response.json())
    })

    yield put(setUserAction(data))
  } catch (error) {
  }
}

function * addOperation (action) {
  const state = yield select()
  console.log(state)

  try {
    const data = yield call(() => {
      return fetch('api/operations/add', {
        method: 'POST',
        body: JSON.stringify({ ...action.payload }),
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
      })
        .then(response => response.json())
    })
    console.log(data)

    yield put(getOperationsAction())
  } catch (error) {
  }
}

function * getOperations () {
  const state = yield select()
  console.log(state)

  try {
    const data = yield call(() => {
      return fetch('api/operations/', {
        method: 'GET',
        body: null,
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
      })
        .then(response => response.json())
    })

    yield put(setOperationsAction(data))
  } catch (error) {
  }
}

function * root () {
  yield takeLatest(LOG_IN, watchExample)
  yield takeLatest(ADD_OPERATION, addOperation)
  yield takeLatest(GET_OPERATIONS, getOperations)
}

export default root
