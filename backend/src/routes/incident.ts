import Router from 'koa-router'
import incidentController from '../controllers/incidentController'

const routes = new Router({ prefix: '/incidents' })

routes.get('/', incidentController.index)
routes.post('/', incidentController.store)
routes.del('/:id', incidentController.destroy)

export default routes
