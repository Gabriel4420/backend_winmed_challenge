const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./routes')

require('./config/conn')

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(morgan('dev'))
    this.app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Credentials', 'true')
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,HEAD,OPTIONS,POST,PUT,DELETE, PATCH',
      )
      res.setHeader('Access-Control-Allow-Headers', '*')
      res.setHeader('Access-Control-Request-Headers','*')
      //Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization
      this.app.use(cors('*'))
      next()
    })
  }
  routes() {
    this.app.use(routes)
  }
}

module.exports = new App().app
