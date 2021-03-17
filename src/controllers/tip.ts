import { Request, Response } from 'express'
import TipService from '../services/tip'

class TipController {
  public async index (request: Request, response: Response): Promise<Response> {            
    const tips = await TipService.index()
    
    return response.status(200).json(tips)        
  }

  public async create (request: Request, response: Response): Promise<Response> {
    const tip = await TipService.create(request.body)        

    return response.status(201).json(tip)
  }

  public async show (request: Request, response: Response): Promise<Response>{
    const { tags } = request.params

    const tips = await TipService.show(tags)    

    return response.status(200).json(tips)
  }
}

export default new TipController()