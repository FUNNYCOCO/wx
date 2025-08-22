<template>
    <div>
        <h1>首页</h1>
    </div>
</template>

<script>
import { get, post } from '../../utils/http'
export default {
  created () {
    get('banner/json').then(res => {
      console.log(`首页获取banner成功 ${res.data.toString()}`)
    })
    const params = {
      username: 'admin',
      password: 'PASSWORD'
    }
    const isFormData = true

    post('user/login', params, isFormData).then(res => {
      console.log(`首页登录成功 ${res.data.toString()}`)
    })
  }
}
</script>

<style scoped>
</style>
