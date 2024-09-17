import Joi from "joi";

export const createProductSchema = Joi.object({
  image: Joi.string()
    .uri()
    .required(),
  price: Joi.number()
    .integer()
    .min(0)
    .required(),
  title: Joi.string()
    .min(1)
    .max(255)
    .required(),
  count: Joi.number()
    .integer()
    .min(0)
    .required()
});