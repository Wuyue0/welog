import { createStore, applyMiddleware } from 'redux';           //中间件和store
import createSagaMiddleware from 'redux-saga';                  //引入sagamiddleware
import { composeWithDevTools } from 'redux-devtools-extension'; // 调试工具
import {routerMiddleware} from 'react-router-redux';
import rootReducer, { createReducer } from './reducers';        //引入reducers
import rootSaga from './sagas';                                 //引入rootsaga


// 使用react-router-redux 
let createHistory = require('history').createHashHistory;
let history = createHistory();   // 初始化history
let routerWare = routerMiddleware(history);

// 创建saga中间件
const sagaMiddleware = createSagaMiddleware()

//合并middlewares
const middlewares = [sagaMiddleware,routerWare]

const configureStore = (initialState = {}) => {

  // 配置saga和store做链接 传入reducer
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )

  //启动saga
  sagaMiddleware.run(rootSaga)


  store.runSaga = sagaMiddleware.run
  store.asyncReducers = store.asyncReducers || {}
  store.asyncSagas = store.asyncSagas || []


  return store
}

export const injectAsyncReducer = ({ name, asyncReducer, store }) => {
  if ( store.asyncReducers[name] ) return
  store.asyncReducers[name] = asyncReducer
  store.replaceReducer(createReducer(store.asyncReducers))
}

export const injectAsyncSagas = ({ name, sagas, store }) => {
  if ( !store.asyncSagas.includes(name) ) {
    sagas.forEach(store.runSaga)
    store.asyncSagas.push(name)
  }
}

export default configureStore({})