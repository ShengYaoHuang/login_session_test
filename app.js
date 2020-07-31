const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const checkUsers = require('./checkUsers')
const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('req.body', req.body)
  const user = req.body
  const userEmail = req.body.email
  const checkUser = checkUsers(user)
  console.log(checkUser)
  if (checkUser) {
    res.render('welcomePage', { checkUser })
  } else {
    const error = 'Email 或 密碼 輸入錯誤!'
    res.render('index', { error, userEmail })
  }
})


app.listen(3000, () => {
  console.log(`Express is listening on http://localhost:3000`)
})