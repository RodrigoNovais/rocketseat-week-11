import Router from 'koa-router'
import sessionController from '../controllers/sessionControllers'

import validation from '../middlewares/validation'
import { createSession } from '../validators/session'

const routes = new Router({ prefix: '/sessions' })

routes.post('/',
    validation.body(createSession.body),
    sessionController.store)

export default routes
