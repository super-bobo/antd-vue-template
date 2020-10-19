import axios from 'axios'
import { TIMEOUT, API_HOST } from './config'
import { message } from 'ant-design-vue'

json: 'application/json; charset=utf-8'
form: 'application/x-www-form-urlencoded; charset=utf-8'
const request = axios.create({
  baseURL: API_HOST,
  timeout: TIMEOUT,
  // withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 请求拦截
request.interceptors.request.use(
  config => {
    console.log(config)
    if (config.tableLoading) {
      store.commit('common/toggleTableLoading', true)
    }
    console.log(store)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
request.interceptors.response.use(
  response => {
    const { data: res, config } = response
    if (config.tableLoading) {
      store.commit('common/toggleTableLoading', false)
    }
    // code = 0 成功
    if (res.code === 0) {
      return Promise.resolve(res.data)
    } else {
      switch (res.code) {
        case 401: // 未登录
        case 403: // 没权限
          router.replace({
            name: 'login'
            // query: {
            //   redirectUrl: router.history.current.fullPath
            // }
          })
          break
        default:
          message.error(res.msg || 'Error')
          break
      }
      return Promise.reject(res.msg || 'Error')
    }
  },
  error => {
    message.error(error.message)
    return Promise.reject(error)
  }
)

export const get = (url, params, options) => {
  return request({
    url,
    data: {
      t: Date.now(),
      ...params
    },
    ...options
  })
}

export const post = (url, data, options) => {
  return request({
    method: 'post',
    url,
    data,
    ...options
  })
}
