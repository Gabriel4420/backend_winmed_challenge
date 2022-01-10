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
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Credentials", "true");
      res.set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT, PATCH");
      res.set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
      this.app.use(cors('*'))
      next()
    })
  }
  routes() {
    this.app.use(routes)
  }
}

module.exports = new App().app