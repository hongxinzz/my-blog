const fs = require('fs')
const path = require('path')
const marked = require('marked')
const mongoose = require('mongoose')
const PostArticle = require('../server/module/person')
const moment = require('moment')

const dir = path.resolve(__dirname, '../markdown')

const filelist = fs.readdirSync(dir) || []

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })

// blog.sync();

filelist.forEach(fileName => {
  let fileContent = new String(fs.readFileSync(path.join(dir, fileName)))
  // console.log(fileContent)
  let title = fileContent.substring(0, fileContent.search(/\r?\n/)).replace(/^#*\s*/, '')
  let content = fileContent.substr(fileContent.search(/\r?\n/))
  let dateStr = fileName.substring(0, fileName.indexOf('.'))
  console.log(marked(content))
  let person = new PostArticle({
    id: '',
    title: title,
    // cover: data.cover,
    content: marked(content),
    // tags: data.tags,
    time: moment(dateStr, 'YYYYMMDDhhmm').toDate()
  })
  person.save(function (err, comment) {
    // console.log(1, comment)
    if (comment) {
      console.log(`${fileName}入库成功`)
    } else {
      console.log(err)
    }
  })
})
