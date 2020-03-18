import { all } from 'redux-saga/effects'   //引入saga模块

import { loginSagas } from './login'      //异步处理函数

const run = sagas => sagas.map(saga => saga())

//单一进入点, 一次启动所有的saga
export default function* rootSaga() {
  yield all([
    ...run([
      loginSagas
      // ...userSagas,
    ]),
  ])
}