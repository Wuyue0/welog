import axios from 'axios';
import store from '@/store'
import { getToken , removeToken } from '@/utils/auth';
import { Modal } from 'antd'


// const baseURL = process.env.NODE_ENV === 'development' ? '/api':'';


const service = axios.create({
  // baseURL: baseURL, //api的baseurl
  timeout: 5000,
  withCredentials:true
})

// 添加一个请求拦截器  request
service.interceptors.request.use(config => {

  // console.log('获取store中的cookie',store.getState())
  
  if(getToken()){
    config.headers['Authorization'] = getToken()
  }
  return config   
}, error => {
  console.log('请求出错了')
  return Promise.reject(error);
})


function logout() {
  removeToken()
  window.location.reload();
}

// 添加一个响应拦截器 respone
axios.interceptors.response.use(
  response => {
    const res = response.data || {}

     // 如果响应成功但结果不为0,则提示错误信息
    if (res.code !== 0) {
       console.log('成功但是不为0',res)
      return Promise.reject(new Error(res.msg || 'Error'))
    }

    return res;   
  }, 
  error => {
    const res = error.response || {}

     /**
     * 如果token失效,重新刷新页面。会触发beforeRouter钩子函数。
     * 钩子函数里会请求`UserInfo`接口，因为token失效，会抛出401抛出异常，
     * 捕获异常后就会清除本地`token`，然后跳转到登录页面。
     */
    // if (res.status === 401) {
    //   store.dispatch('user/resetToken').then(() => {
    //     location.reload()
    //   })
    // } else {
    //   //提示后端抛出的异常信息
    //   const errMsg = (res.data && res.data.msg) || '发生未知的错误'
    //   Message({
    //     message: errMsg,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    // }
    return Promise.reject(error);
});

export default service