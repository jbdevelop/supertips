import { Request, Response } from 'express'
import TipRepository from '../repositories/TipRepository'
import TipService from '../services/TipService'
class TipController {
  public async index (request: Request, response: Response): Promise<Response> {    
    const tips = await TipService.index()
    
    return response.status(200).json(tips)        
  }

  public async create (request: Request, response: Response): Promise<Response> {
    const tip = await TipRepository.create(request.body)        

    return response.status(201).json(tip)
  }

  public async show (request: Request, response: Response): Promise<Response>{
    const { tags } = request.params

    const tips = await TipService.show(tags)    

    return response.status(200).json(tips)
  }
}

export default new TipController()