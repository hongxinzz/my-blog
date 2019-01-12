const articleModule = require('../module/article');

/**
 * 通过标签查找文章(模糊搜索)
 * @param ctx
 */
module.exports.findArticleByTag = async ctx =>{
  let data = ctx.query
  await articleModule.findArticleByTag(data.tags)
    .then(res=>{
      checkDataType(ctx,res)
    })
}

/**
 * 文章详情页
 * @param ctx
 */
module.exports.findArticleOne = async ctx =>{
  let data = ctx.query
  await articleModule.findArticleOne(data.id)
    .then(res=>{
      checkDataType(ctx,res)
    })
}

/**
 * 获取所有标签
 * @param ctx
 */
module.exports.findArticleAllTag = async ctx =>{
  await articleModule.findArticleAllTag()
    .then(res=>{
      let tagList = []
      res.forEach(data=>{
        data.tags.forEach(tag=>{
          tagList.push(tag)
        })
      })
      tagList = Array.from(new Set(tagList))
      checkDataType(ctx,tagList)
    })
}

/**
 * 获取所有文章个数并分页
 * @param ctx
 * @returns {Promise<void>}
 */
module.exports.getArticlePage = async ctx =>{
  let data = ctx.query;
  let page = data.page;
  let start = (page - 1) * 5;
  let pageLimit;
  if(!pageLimit){
    pageLimit = null
  }
  pageLimit = Number(data.pageLimit);
  //获取所有文章总数
  let count =  await articleModule.getArticleCount();
  //分页操作
  await articleModule.getArticlePage(start,pageLimit)
    .then(res=>{
      let data = {data: res, count: count}
      checkDataType(ctx,data)
    })
}

/**
 * 获取最新3个
 * @param ctx
 * @returns {Promise<void>}
 */
module.exports.getArticleNew = async ctx => {
  let data = ctx.query;
  let pageLimit = Number(data.pageLimit)
  await  articleModule.getArticleNew(pageLimit)
    .then(res=>{
    checkDataType(ctx,res)
  })
}

/**
 * 发布文章
 * @param ctx
 * @returns {Promise<void>}
 */
module.exports.postArticle = async ctx =>{
  let data = ctx.request.body;
  await articleModule.postArticle(data)
    .then(res=>{
      checkDataType(ctx,res)
    })
}



/**
 * 判断是否正确数据
 * @param ctx
 * @param data
 */
function checkDataType(ctx,data){
  if(data){
    ctx.body = data;
  }else{
    ctx.body = 'error'
  }

}
