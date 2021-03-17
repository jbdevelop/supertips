import { Request } from 'express'
import TipRepository from '../repositories/TipRepository'
import TipInterface from '../interfaces/Tip'
class TipService {
  public async index (): Promise<TipInterface[]> {    
    const tips = await TipRepository.index()    
    
    return tips
  }  

  public async create (tip: Request): Promise<TipInterface> {    
    const createdTip = await TipRepository.create(tip)

    return createdTip
  }

  public async show (tags: string): Promise<TipInterface[]> {    
    const tagsArray = tags.split(',')

    const tips = await TipRepository.show(tagsArray)    

    const tipsFiltered = tips.filter(tip => tagsArray.every(ta => tip.tags.includes(ta))) 

    return tipsFiltered
  }
}

export default new TipService()