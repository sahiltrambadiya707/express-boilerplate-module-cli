const Joi = require("joi");
const { objectId } = require("./custom.validation");

const validation = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
  query: Joi.object().keys({
    query_name: Joi.string().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

module.exports = {
  validation,
};
