import compose from 'koa-compose'
import Router from 'koa-router'

import incident from './incident'
import ngo from './ngo'
import profile from './profile'

function combine(...routers: Router[]) {
    if (!Array.isArray(routers))
        routers = [...arguments]

    const middleware: Array<any> = []

    routers.forEach(router => {
        middleware.push(router.routes())
        middleware.push(router.allowedMethods())
    })

    return compose(middleware)
}

export default combine(incident, ngo, profile)
