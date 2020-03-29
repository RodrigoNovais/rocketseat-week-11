import Router from 'koa-router'
import incidentController from '../controllers/incidentController'

import validation from '../middlewares/validation'
import { listIncidents, createIncident, removeIncident } from '../validators/incident'

const routes = new Router({ prefix: '/incidents' })

routes.get('/',
    validation.query(listIncidents.query),
    incidentController.index)

routes.post('/',
    validation.header(createIncident.header),
    validation.body(createIncident.body),
    incidentController.store)

routes.del('/:id',
    validation.params(removeIncident.params),
    incidentController.destroy)

export default routes
