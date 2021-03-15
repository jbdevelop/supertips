import { Schema, model } from 'mongoose'

const tipSchema = new Schema({
  url: String,
  tags: Array
}, {
  timestamps: true
})

export default model('Tip', tipSchema)