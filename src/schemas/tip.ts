import { Schema, model } from 'mongoose'
import { TipInterface } from '../interfaces/tip'

const tipSchema = new Schema({
  url: String,
  tags: Array
}, {
  timestamps: true
})

export default model<TipInterface>('tip', tipSchema)