const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')
const checkUsers = require('./checkUsers')
const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  secret: 'recommand 128 bytes random string',
  cookie: { maxAge: 600 * 1000 } //10分鐘到期
}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
  const userData = req.body
  const userEmail = req.body.email
  const checkUser = checkUsers(userData)
  if (checkUser) {
    res.render('welcomePage', { checkUser })
    req.session.name = `${userData.firstname}`
  } else {
    const error = 'Email 或 密碼 輸入錯誤!'
    res.render('index', { error, userEmail })
  }
})

app.post('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})

app.listen(3000, () => {
  console.log(`Express is listening on http://localhost:3000`)
})