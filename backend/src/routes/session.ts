import Router from 'koa-router'
import sessionController from '../controllers/sessionControllers'

const routes = new Router({ prefix: '/sessions' })

routes.post('/', sessionController.store)

export default routes
