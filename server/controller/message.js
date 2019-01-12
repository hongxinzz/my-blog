const messageModule = require('../module/message');

/**
 * 保存留言
 * @param ctx
 * @returns {Promise<void>}
 */
module.exports.postMessage = async ctx =>{
  let data = ctx.request.body
  await messageModule.postMessage(data)
    .then(res=>{
      checkDataType(ctx,res)
    })
}

/**
 * 获取留言
 * @param ctx
 * @returns {Promise<void>}
 */
module.exports.getMessage = async ctx =>{
  await  messageModule.getMessage()
    .then(res=>{
      checkDataType(ctx,res)
    })
}

/**
 * 删除留言
 * @param ctx
 * @returns {Promise<void>}
 */
module.exports.deleteMessage = async ctx =>{
  let data = ctx.request.body
  console.log(data)
  await  messageModule.deleteMessage(data.id)
    .then(res=>{
      checkDataType(ctx,res)
    })
}




/**
 * 判断是否正确数据
 * @param ctx
 * @param data
 */
function checkDataType(ctx,data) {
  if (data) {
    ctx.body = data;
  } else {
    ctx.body = 'error'
  }
}
