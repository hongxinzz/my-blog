import axios from 'axios'

export default class baseApi {
  // get请求
  get (url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param
      }).then(res => {
        resolve(res)
      }).catch(err => {
        console.log(err)
      })
    })
  }

  // post请求
  post (url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param
      }).then(res => {
        resolve(res)
      }).catch(err => {
        console.log(err)
      })
    })
  }
}
