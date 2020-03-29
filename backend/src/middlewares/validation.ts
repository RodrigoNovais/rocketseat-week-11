import { ObjectSchema, ValidationOptions } from '@hapi/joi'
import { Context, Next, ParameterizedContext } from 'koa'
import { IRouterParamContext } from 'koa-router'

export type ValidatorParameter = { schema: ObjectSchema, options?: ValidationOptions }

export const body = ({ schema, options }: ValidatorParameter) => {
    return async (context: Context, next: Next) => {
        const { value, error } = schema.validate(context.request.body, options)

        if (!error) {
            context.request.body = value

            return next()
        }
        
        context.status = 400
        context.body = { error }
    }
}

export const header = ({ schema, options }: ValidatorParameter) => {
    return async (context: Context, next: Next) => {
        const { value, error } = schema.validate(context.request.header, options)

        if (!error) {
            context.request.header = value

            return next()
        }
        
        context.status = 400
        context.body = { error }
    }
}

export const query = ({ schema, options }: ValidatorParameter) => {
    return async (context: Context, next: Next) => {
        const { value, error } = schema.validate(context.request.query, options)

        if (!error) {
            context.request.query = value

            return next()
        }
        
        context.status = 400
        context.body = { error }
    }
}

export const params = ({ schema, options }: ValidatorParameter) => {
    return async (context: ParameterizedContext<any, IRouterParamContext<any, {}>>, next: Next) => {
        const { value, error } = schema.validate(context.params, options)

        if (!error) {
            context.params = value

            return next()
        }
        
        context.status = 400
        context.body = { error }
    }
}

export default { body, header, params, query }
