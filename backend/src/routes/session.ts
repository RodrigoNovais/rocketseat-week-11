import Router from 'koa-router'
import sessionController from '../controllers/sessionControllers'

const routes = new Router({ prefix: '/profile' })

routes.post('/', sessionController.store)

export default routes
