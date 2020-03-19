import request from './request'


//测试用的接口
export function test() {
  return request({
    method: 'get',
    url: '/test/simpleWeather/query?city=%E8%8B%8F%E5%B7%9E&key=dc85b2421cdaa8b36084f4215af09f66'
  })
}

// 登录接口
export function login(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data: {
      username: data.loginName,
      password: data.password
    }
  })
}
