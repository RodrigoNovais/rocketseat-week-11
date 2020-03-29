import Koa from 'koa'

import bodyparser from 'koa-bodyparser'
import cors from 'koa2-cors'

import routes from './routes'

const app = new Koa()

app.use(cors())
app.use(bodyparser())
app.use(routes)

export default app
