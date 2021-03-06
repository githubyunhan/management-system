/*用于存放与后端交互的api*/

import axios from '../api.request';
import qs from 'qs';
import config from '../../config/run.config'

let Axios
if (config.runConfig.mock) {
  Axios = require('axios');
  Axios.defaults.headers.post['content-Type'] = 'application/x-www-form-urlencoded'
}

// 通用的远程访问的方法
export function fetch(url, params = {}) {
  if(config.runConfig.mock){
    return new Promise((resolve, reject) => {
      Axios.post(url, params)
        .then(response => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    })
  }else{
    return axios.request({
      // 响应的后端的接口的地址，不包含http://127.0.0.1:8888这一部分，因此这一部分我们已经在axios.js中配置了
      url: url,
      // 由于我们的数据的提交方式是form的方式提交，因此需要对入参建转换
      //JSON.stringify(params)   qs.stringify(params)
      data:qs.stringify(params),
      // 数据请求的方式为post
      method: 'post'
    });
  }
}
