const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const stamRouter = require('./routes/stammen')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/', indexRouter)
app.use('/stammen', stamRouter)
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

mongoose.connect('mongodb+srv://quinlan:3Kwz4YuXv@collection.c7vlr.mongodb.net/stammen?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.listen(process.env.PORT || 3000)

