import Joi from '@hapi/joi'
import { ValidatorParameter } from '../middlewares/validation'

export const createSession = {
    body: {
        schema: Joi.object().keys({
            authorization: Joi.string().required(),
        }),
        options: { allowUnknown: true }
    } as ValidatorParameter
}

export default { createSession }
