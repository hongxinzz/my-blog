import {get,post,jsonp} from './httpRequest.js';
import {option,commonParams} from "./config";
/**************************get************************/
/**
 * 获取博客列表
 * @param parmars
 */
export const getBlogsPage = parmars => get('/api/get_blogs_page',parmars);

export const getBlogDetails = parmars => get('/api/get_blogs_one',parmars);

export const getBlogMessage = () => get('/api/get_blog_message',null);
/**************************post************************/
export  const postMessage = parmars => post('/api/post_message',parmars);

export  const deleteBlogMessage = parmars => post('/api/delete_blog_message',parmars);



/**************************jsonp************************/

export  const getSingerList = () =>{
    const  url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
    const data = Object.assign({}, commonParams, {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq'
    })

    return jsonp(url, data, option)
}