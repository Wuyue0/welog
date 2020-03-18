import axios from 'axios';
import { getToken , removeToken } from '@/utils/auth';


// const baseURL = process.env.NODE_ENV === 'development' ? '':'';


const service = axios.create({
  baseURL: baseURL, //api的baseurl
  timeout:90000,
  withCredentials:true
})

// 添加一个请求拦截器  request
service.interceptors.request.use(config => {

  if(getToken()){
    config.headers['Authorization'] = 'Bearer ' + getToken()
  }
  return config   
}, error => {
  console.log('请求出错了')
  return Promise.reject(error);
})

// 添加一个响应拦截器 respone
axios.interceptors.response.use(
  response => {
    return Promise.resolve(response)     
  }, 
  error => {
    var message = (error.response && error.response.data.message) || (error.message.indexOf('timeout') > -1 ? '请求超时' : error.message)

    if (error.response.data.code === '0000005') {
        Modal.error({
            title: '请求错误',
            content: message,
            onOk() { logout() }
        })
    } else {
        Modal.error({
            title: '请求错误',
            content: message
        })
    }
    return Promise.reject(error);
});

export default service