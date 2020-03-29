import Joi from '@hapi/joi'
import { ValidatorParameter } from '../middlewares/validation'

export const createNGO = {
    body: {
        schema: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            whatsapp: Joi.string().min(10).max(11).required(),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2),
        })
    } as ValidatorParameter
}

export default { createNGO }
