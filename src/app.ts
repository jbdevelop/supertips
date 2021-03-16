import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

class App {
  public express: express.Application

  constructor () {
    dotenv.config()
    
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
    const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?${process.env.DATABASE_URL_PARAMS}`  
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  }

  private routes () {
    this.express.use(routes)
  } 
}

export default new App().express
