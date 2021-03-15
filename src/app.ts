import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

class App {
  public express: express.Application

  constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database () {  
    const uri = 'mongodb+srv://admin:rRimjy6F8c1EYYl4@cluster0.kwono.mongodb.net/supertips?retryWrites=true&w=majority'  
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  }

  private routes () {
    this.express.use(routes)
  } 
}

export default new App().express
