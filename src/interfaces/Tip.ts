import { Document } from 'mongoose'

export default interface TipInterface extends Document {
  url: string;
  tags: Array<string>
}