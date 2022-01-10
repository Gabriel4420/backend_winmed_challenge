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
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS')
      res.header(
        'Access-Control-Allow-Headers',
        'Access,Content-type,Authorization,Acept,Origin,X-requested-With',
      )
      this.app.use(cors())
      next()
    })
  }
  routes() {
    this.app.use(routes)
  }
}

module.exports = new App().app