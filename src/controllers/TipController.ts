import { Request, Response } from 'express'

import Tip from '../schemas/Tip'

class TipController {
  public async index (request: Request, response: Response): Promise<Response> {    
    const tips = await Tip.find()

    return response.json(tips)    
  }
}

export default new TipController()