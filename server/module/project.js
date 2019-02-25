const mongoose = require('mongoose');

// 登录模板
const project = new mongoose.Schema({
    id: Number,
    imgUrl: String,
    des: String,
    title:String
})

let _Project = mongoose.model('Project', project);


/**
 * 新增project
 * @param data
 * @returns {*}
 */
module.exports.postProject =  data =>{
    let person = new _Project({
        imgUrl: data.imgUrl,
        des: data.des,
        title:data.title
    });
    return  person.save();
};

/**
 * 获取project
 * @param data
 * @returns {number | * | BigInt | T}
 */
module.exports.getProject = data =>{
    return _Project.find({}).sort({time:-1})
}