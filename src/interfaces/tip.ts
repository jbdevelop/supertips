import { Document } from 'mongoose'

export interface TipInterface extends Document {
  url: string;
  tags: Array<string>
}