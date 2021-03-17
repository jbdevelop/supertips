import { Router } from 'express'

import TipController from './controllers/tip'

const routes = Router()

routes.post('/tips', TipController.create)
routes.get('/tips', TipController.index)
routes.get('/tips/tags/:tags', TipController.show)

export default routes