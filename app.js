const express = require('express')

const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generate = require('./generate')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const { people } = req.body
    const outpute = generate(people)
    res.render('index', { outpute, people })
})

app.use(function(req, res) {
    res.status(400)
    res.render('404')
})

app.use(function(error, req, res, next) {
    res.status(500)
    res.render('500')
})

app.listen(port, () => {
    console.log(`Express is listning on licalhost: ${port}`)
})