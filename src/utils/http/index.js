import Fly from 'flyio/dist/npm/wx'
// 创建项目实例
const fly = new Fly()
// 添加域名
fly.config.baseURL = 'https://www.wanandroid.com'

// 请求拦截器
fly.interceptors.request.use((request) => {
  // 在请求发送之前做一些处理
  // request.headers['Cookie'] = '你的Cookie值'
  console.log('Request---->', request.url)
  console.log(request)
  return request
})
// 响应拦截器
fly.interceptors.response.use((response) => {
  // 在响应数据返回之前做一些处理
  console.log('Response---->', response.request.url)
  console.log(response)
  return response
})

export function get (url, params = {}) {
  return fly.get(url, params)
    .then(res => {
      return res
    })
    .catch(err => { throw err })
}

export function post (url, params = {}, isFormData = false) {
  return fly.post(
    {
      method: 'POST',
      url,
      params,
      headers: isFormData
        ? { 'Content-Type': 'application/x-www-form-urlencoded' }
        : { 'Content-Type': 'application/json' }
    }
  )
    .then(res => {
      console.log(res)
      return res
    })
    .catch(err => { throw err })
}
