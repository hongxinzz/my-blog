import jsonP from 'jsonp';
import { getLocal, setLocal,removeLocal} from "../utils/utils";
import router from '../router/index'


/**
 * get方法，对应get请求
 * @param {String} url
 * @param {Object} params
 */
export function get(url, params) {
    if(getLocal('USER_LOGIN_TOKEN')){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
            showErrorMsg(err.response.status)
        })
    });
}

/**
 * post方法，对应post请求
 * @param {String} url
 * @param {Object} params
 */
export function post(url, params) {
    if(getLocal('USER_LOGIN_TOKEN')){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
                showErrorMsg(err.response.status)
            })
    });
}

function showErrorMsg(code) {
    let errMsg = '';
    console.log(code)
    switch (code) {
        case 401:
            removeLocal('USER_LOGIN_TOKEN');
            console.log(1)
            router.push('/admin');
            break;
        case 501:
            errMsg = '网络错误';
            break;
        case 500:
            errMsg = '服务器未知错误';
            break;
        case 504:
            errMsg = '网络延迟';
            break;
    }
    console.log(errMsg)
}
/**************************json 配置************************/


/**
 * jsonp 方法用来调取QQ 音乐
 * @param url
 * @param data
 * @param option
 */
export function jsonp(url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
    return new Promise((resolve, reject) => {
        jsonP(url, option, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

function param(data) {
    let url = '';
    for (var k in data) {
        let value = data[k] !== undefined ? data[k] : '';
        url += `&${k}=${encodeURIComponent(value)}`
    }
    return url ? url.substring(1) : '';
}
