import axios from 'axios'
import { TIMEOUT, API_HOST } from './config'
import { message } from 'ant-design-vue'

const request = axios.create({
  baseURL: API_HOST,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// request interceptor
request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
request.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code !== 200) {
      message.error(res.message || 'Error')
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
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
    params,
    options
  })
}

export const post = (url, data, options) => {
  return request({
    method: 'post',
    url,
    data,
    options
  })
}
