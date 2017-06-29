var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const cors = require('cors')
const passport = require('./passport')


var greetings = require('./routes/greeting')


const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true
}

var server = express()
server.use(cors(corsOptions))

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cookieParser())
server.use(require('express-session')({ secret: 'the cake is a lie', resave: false, saveUninitialized: false }))
server.use(passport.initialize())
server.use(passport.session())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/greetings', greetings)

module.exports = function(db) {
  server.set('db', db)
  return server
}
