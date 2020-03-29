import Router from 'koa-router'
import profileController from '../controllers/profileController'

import validation from '../middlewares/validation'
import { listNGOIncidents } from '../validators/profile'

const routes = new Router({ prefix: '/profile' })

routes.get('/',
    validation.header(listNGOIncidents.header),
    profileController.index)

export default routes
