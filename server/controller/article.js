const articleModule = require('../module/postArticle');

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



function checkDataType(ctx,data){
  if(data){
    ctx.body = data;
  }else{
    ctx.body = 'error'
  }

}
