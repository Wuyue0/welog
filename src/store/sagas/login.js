// saga模块化引入
import {put, call, take, fork} from 'redux-saga/effects'
import * as api from '@/services/login.services.js'
import * as Login from '../constants';
import { loginSuccess, loginFailure } from '../actions/login';
import { setToken } from '@/utils/auth'
import { push } from 'react-router-redux';


//执行处理的动作
function* loginRequest(data) {
    try {
        const response = yield call(api.login, data);
        console.log('返回的数据',response)
        if (response.code === 0) {
            setToken(response.data.token)
            yield put(push('/'))
            yield put(loginSuccess(response.data.token));
        }  else {
            yield put(loginFailure({
                code: response.code,
                msg: response.msg
            }));
        }
    } catch (e) {
        console.log('saga 捕获错误',e)
        yield put(loginFailure({
            code: e.code,
            msg: e.msg
        }));
    }
}

//watcher saga 监听actions
export function* loginSagas() {
    while (true) {
        const resData = yield take(Login.LOGIN_REQUEST);
        console.log('saga执行程序')
        yield fork(loginRequest, resData.payload);
    }

    // yield* takeEvery('获取的类型',执行的异步任务)  和以上是等同的
}