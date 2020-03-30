import Joi from '@hapi/joi'
import { ValidatorParameter } from '../middlewares/validation'

export const createSession = {
    body: {
        schema: Joi.object().keys({
            id: Joi.string().required(),
        }),
    } as ValidatorParameter
}

export default { createSession }
