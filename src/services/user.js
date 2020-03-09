import request from './request'
import { stringify } from 'querystring';

// 测试1
export function login1(params) {
  return request(params)
}

// 测试2
export function login2(data) {
  return request(`/xxx/xxx2`, {
    method: 'post',
    body: data,
  })
}
