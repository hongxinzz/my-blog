const projectModule = require('../module/project');

/**
 * 保存demo
 * @param ctx
 * @returns {Promise<void>}
 */
module.exports.postProject = async ctx =>{
    let data = ctx.request.body
    await projectModule.postProject(data)
        .then(res=>{
            checkDataType(ctx,res)
        })
};

/**
 * 获取demo
 * @param ctx
 * @returns {Promise<void>}
 */
module.exports.getProject = async ctx =>{
    await projectModule.getProject()
        .then(res=>{
            checkDataType(ctx,res)
        })
};




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