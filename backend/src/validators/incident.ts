import Joi from '@hapi/joi'
import { ValidatorParameter } from '../middlewares/validation'

export const listIncidents = {
    query: {
        schema: Joi.object().keys({
            page: Joi.number(),
            limit: Joi.number(),
        }),
    } as ValidatorParameter,
}

export const createIncident = {
    header: {
        schema: Joi.object().keys({ authorization: Joi.string().required() }),
        options: { allowUnknown: true },
    } as ValidatorParameter,

    body: {
        schema: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required(),
        }),
    } as ValidatorParameter,
}

export const removeIncident = {
    params: {
        schema: Joi.object().keys({ id: Joi.number().required() }),
    } as ValidatorParameter
}

export default { listIncidents, createIncident, removeIncident }
