// import axios from 'axios'
// import { BASE_URL, TIMEOUT } from "./config"
 

// class  HttpRequest {
//   constructor(BASE_URL) {
//     this.BASE_URL = BASE_URL
//     this.TIMEOUT = TIMEOUT 
//   }

//   getInsideConfig () {
//     const config = {
//       baseURL: this.BASE_URL,
//       timeout: this.TIMEOUT,
//       // header: {  }// 可以设置对应的请求头
//     }
//     return config
//   }
//   // 拦截
//   interceptors (instance) {
//     instance.interceptors.request.use((config) => {
//       // 处理config 
//       console.log(config)
//       return config
//     })
//     instance.interceptors.response.use((res) => {
//       // 处理响应  
//       return res
//     }, (error) => {
//       console.log(error)
//       return {
//         error: '网络出错'
//       }
//     }) 
//   }
//   request(options) {
//     const instance = axios.create() // 创建实例对象
//     options = Object.assign(this.getInsideConfig(), options)
//     this.interceptors(instance, options.url)
//     return instance(options)
//   }
// }

// const request = new HttpRequest(BASE_URL)

// export default request


import axios from 'axios';

import { BASE_URL, TIMEOUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

instance.interceptors.request.use(config => {
  // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

  // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

  // 3.params/data序列化的操作

  return config;
}, err => {

});

instance.interceptors.response.use(res => {
  return res.data;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误");
        break;
      case 401:
        console.log("未授权访问");
        break;
      default:
        console.log("其他错误信息");
    }
  }
  return err;
});

export default instance;