
const fs = require('fs')
const path = require('path')
const marked = require('marked')
const PostArticle = require('../module/postArticle')
const moment = require('moment')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })

const dir = path.resolve(__dirname, '../../markdown')

const filelist = fs.readdirSync(dir) || []

filelist.forEach(fileName => {
  let fileContent = new String(fs.readFileSync(path.join(dir, fileName)))
  let title = fileContent.substring(0, fileContent.search(/\r?\n/)).replace(/^#*\s*/, '')
  let content = marked(fileContent.toString())
  let dateStr = fileName.substring(0, fileName.indexOf('.'))

  let person = new PostArticle({
    title: title,
    content: content,
    time: moment(dateStr, 'YYYYMMDDhhmm').toDate()
  })
  console.log(dateStr)
  person.save(function (err, comment) {
    console.log(1, comment)
    if (comment) {
      console.log(`${fileName}入库成功`)
    } else {
      console.log(err)
    }
  })
})
