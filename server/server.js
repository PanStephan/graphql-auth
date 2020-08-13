const express = require('express')
const webpackMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')

const models = require('./models')
const passportConfig = require('./services/auth')
const schema = require('./schema/schema')
const webpackConfig = require('../webpack.dev.config.js')

const app = express()

//jelij64271@academail.net
const MONGO_URI = 'mongodb+srv://stephan:R_U_MINE@cluster0.hmku1.mongodb.net/auth?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to mongodb instance'))
  .catch(e => console.log('DB error', e)) 

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'aaabbbccc',
  store: new MongoStore({
    url: MONGO_URI,
    autoReconnect: true
  })
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)
app.use(webpackMiddleware(webpack(webpackConfig)))

module.exports = app