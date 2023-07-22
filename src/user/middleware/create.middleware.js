import Joi from 'joi';


const createSchema = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    email:Joi.string().trim().email().required(),
    password:Joi.string().trim().min(6).required(),
    rol:Joi.string()
})


export const createValidateBody = (req, res, next) => {
    const { error } = createSchema.validate(req.body);
    if(error) {
        return res.status(400).json({ error: error.message});
    }
    next();
}