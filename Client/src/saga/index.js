import { all, fork } from 'redux-saga/effects'

import user from './user'

function * root () {
  yield all([
    fork(user),
  ])
}

export default root
