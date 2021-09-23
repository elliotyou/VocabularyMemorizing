const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const port = 3000

//搭配 handlbebars 使用，它會去 ./views/layouts 裡找 main.hbs
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: 'hbs',
}))
app.set('view engine', 'hbs')

//僅為了快速測試基本 route 是否 work
app.get('/', (req, res) => {
  res.render('index')
})

//express基本語法，要有這行 browswer 打網址才會有反應
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})

