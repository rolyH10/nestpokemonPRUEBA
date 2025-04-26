    import * as Joi from 'joi';

    export const JoiValidationschema= Joi.object({
        
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3005), 
    DEFAULT_LIMIT:Joi.number().default(6),
   
    })