import { z } from "zod";
import { addressSchema } from ".";


const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  document: z.string().max(11),
  mobile: z.string().max(12),
  type: z.boolean().default(false),
  birthdate: z.string().max(10),
  bio: z.string().max(100),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullable(),
  address: addressSchema
});

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  address: true,
});

const userReturnSchema = userSchema.omit({ password: true });
const userReadSchema = userReturnSchema.array();
const userUpdateSchema = userCreateSchema.omit({ type: true }).partial();

export {
  userCreateSchema,
  userReadSchema,
  userReturnSchema,
  userSchema,
  userUpdateSchema,
};
