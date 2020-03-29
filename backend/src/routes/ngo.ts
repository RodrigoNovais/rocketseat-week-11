import Router from 'koa-router'
import NGOController from '../controllers/NGOController'

import validation from '../middlewares/validation'
import { createNGO } from '../validators/ngo'

const routes = new Router({ prefix: '/ngo' })

routes.get('/', NGOController.index)

routes.post('/',
    validation.body(createNGO.body),
    NGOController.store)

export default routes
