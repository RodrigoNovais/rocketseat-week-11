import Router from 'koa-router'
import profileController from '../controllers/profileController'

const routes = new Router({ prefix: '/profile' })

routes.get('/', profileController.index)

export default routes
