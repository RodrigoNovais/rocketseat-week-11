import Router from 'koa-router'
import NGOController from '../controllers/NGOController'

const routes = new Router({ prefix: '/ngo' })

routes.get('/', NGOController.index)
routes.post('/', NGOController.store)

export default routes
