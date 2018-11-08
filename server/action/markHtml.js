
const fs = require('fs')
const path = require('path')
const marked = require('marked')
const PostArticle = require('../module/postArticle')
const moment = require('moment')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })

const dir = path.resolve(__dirname, '../../markdown')

const filelist = fs.readdirSync(dir) || []

PostArticle.remove({}, function (err, comment) {
  if (comment) {
    console.log('清空上一次数据,开始读取文件')
    getNewArticle()
  } else {
    console.log(err)
  }
})

function getNewArticle () {
  filelist.forEach(fileName => {
    let fileContent = new String(fs.readFileSync(path.join(dir, fileName)))
    let article = fileContent.replace(/[\r\n]/g, '')
    let title = article.substring(article.search(/##title/), article.search(/-title/)).replace(/##title:/, '')
    console.log(article)
    let tags = article.substring(article.search(/##tags/), article.search(/-tags/)).replace(/##tags:/, '')
    let cover = article.substring(article.search(/##cover/), article.search(/-cover/)).replace(/##cover:/, '')
    let introduction = article.substring(article.search(/##introduction/), article.search(/-introduction/)).replace(/##introduction:/, '')
    let content =  marked(fileContent.substring(fileContent.search(/\n##content/), fileContent.search(/-content/)).replace(/##content:/, ''))
    let time = article.substring(article.search(/##time/), article.search(/-time/)).replace(/##time:/, '')

    let person = new PostArticle({
      title: title,
      tags: tags,
      cover: cover,
      introduction: introduction,
      content: content,
      time: time
    })
    // console.log(fileContent.substring(fileContent.search(/\r?\n/)), fileContent.search(/tags/))
    console.log(time)
    // console.log(fileContent)
    person.save(function (err, comment) {
      // console.log(1, comment)
      if (comment) {
        console.log(`${fileName}入库成功`)
      } else {
        console.log(err)
      }
    })
  })
}
