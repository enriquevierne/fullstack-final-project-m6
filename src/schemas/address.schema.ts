import { z } from "zod";

const addressSchema = z.object({
  id: z.number().positive(),
  zip: z.string().max(8),
  street: z.string().max(45),
  city: z.string().max(20),
  state: z.string().max(2),
  number: z.string().max(10),
  complement: z.string().max(45),
});

const addressCreateSchema = addressSchema.omit({ id: true });
const addressReadSchema = addressSchema.array();

export { addressCreateSchema, addressReadSchema, addressSchema };
