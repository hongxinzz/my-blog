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
    });

    return jsonp(url, data, option)
};

export  const getSingerDetail = (id) =>{
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
    const data = Object.assign({},commonParams,{
        hostUin:0,
        needNewCode:0,
        platform:'yqq',
        order:'listen',
        begin:0,
        num:100,
        songstatus:1,
        g_tk:1664029744,
        singermid:id,
    });

    return jsonp(url, data, option)
};

export function getSongUrl(songmid) {
    const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'

    const data = Object.assign({}, commonParams, {
        loginUin: 0,
        hostUin: 0,
        platform: 'yqq',
        needNewCode: 0,
        data: getData(songmid)
    })

    return jsonp(url, data, {})
}
function getData(songmid) {
    let data = {
        req: {
            module: 'CDN.SrfCdnDispatchServer',
            method: 'GetCdnDispatch',
            param: { guid: '3102513652', calltype: 0, userip: '' }
        },
        req_0: {
            module: 'vkey.GetVkeyServer',
            method: 'CgiGetVkey',
            param: {
                guid: '3102513652',
                songmid: [songmid],
                songtype: [0],
                uin: '0',
                loginflag: 1,
                platform: '20'
            }
        },
        comm: { uin: 0, format: 'json', ct: 20, cv: 0 }
    }
    return JSON.stringify(data)
}
