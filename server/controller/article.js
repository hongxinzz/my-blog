const articleModule = require('../module/postArticle');

exports.findArticleBytag = async ctx =>{
  let data = ctx.query
  await articleModule.findArticleBytag(data.tags)
    .then(res=>{
      ctx.body = res;
    }).catch((err)=>{
      ctx.body = err
    })
}


// function returnJSON (ctx,data) {
//   // 设置状态码为200
//   ctx.status = 200
//   //数据结果
//   ctx.body = data;
// }
