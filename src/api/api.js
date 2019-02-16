import {get,post} from './httpRequest.js';

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

export  const deleteBlogMessage = parmars => post('/api/delete_blog_message',parnars);