import { Router } from 'express'

import TipController from './controllers/TipController'

const routes = Router()

routes.get('/tips', TipController.index)

export default routes