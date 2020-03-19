import axios from 'axios';
import { getToken , removeToken } from '@/utils/auth';
import { Modal } from 'antd'


// const baseURL = process.env.NODE_ENV === 'development' ? '/api':'';


const service = axios.create({
  // baseURL: baseURL, //api的baseurl
  timeout: 5000,
   withCredentials:true  //配置允许跨域携带cookie
})

// 添加一个请求拦截器  request
service.interceptors.request.use(config => {
  if(getToken()){
    config.headers['Authorization'] = getToken()
  }
  return config   
}, error => {
  console.warn('请求之前出错了',error)
  return Promise.reject(error);
})

//退出登录
function logout() {
  removeToken()
  window.location.reload();
}

// 添加一个响应拦截器 respone   注意在http码 在>=200 <300会调用resolve方法
service.interceptors.response.use(
  response => {
    console.warn('=============请求成功========',response)
    const res = response.data || {}
     // 如果响应成功但结果不为0,则提示错误信息  代表用户名或者密码输入错误
    if (res.code !== 0) {
      return Promise.reject(res)
    }
    return res;
  }, 
  error => {
    const res = error.response || {}
    //提示后端抛出的异常信息
    const errMsg = (res.data && res.data.msg) || '发生未知的错误'

    if (res.status === 401) {
      Modal.error({
        title: '请求错误',
        content: errMsg,
        onOk() { 
          logout()
         }
      })
    } else {
      Modal.error({
        message: errMsg,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(res.data);
});

export default service