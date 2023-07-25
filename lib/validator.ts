import Joi, { ObjectSchema } from "joi";

export const searchValidationSchema = Joi.object().keys({
  search: Joi.string().required(),
  searchId: Joi.string(),
  results: {
    nationality: {
      count: Joi.number(),
      name: Joi.string(),
      country: Joi.array().items(
        Joi.object({
          country_id: Joi.string(),
          probability: Joi.number(),
        }),
      ),
    },
    gender: {
      count: Joi.number(),
      name: Joi.string(),
      gender: Joi.string(),
      probability: Joi.number(),
    },
  },
});

export const validateSchema = (schema: ObjectSchema, value: any) => {
  const { error } = schema.validate(value, {
    errors: { label: "key", wrap: { label: false, array: false } },
  });

  if (error) {
    return error.details[0].message;
  }
  return "";
};
