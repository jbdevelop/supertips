import TipSchema from '../schemas/tip'
import { TipInterface } from '../interfaces/tip'
import { Request } from 'express'

class TipRepository {
  public async index (): Promise<TipInterface[]> {    
    const tips = await TipSchema.find()
    
    return tips
  }  

  public async create (tip: Request): Promise<TipInterface> {
    const createdTip = await TipSchema.create(tip)    

    return createdTip
  }
  
  public async show (tags: Array<string>): Promise<TipInterface[]> {
    const tips = await TipSchema.find({ tags: { $in: tags } })

    return tips
  }
}

export default new TipRepository()