import { z } from "zod";
import { imageCreateSchema, imageSchema, userCreateSchema, userSchema } from ".";

const anouncementSchema = z.object({
  id: z.number(),
  brand: z.string().max(20),
  car: z.string().max(20),
  year: z.number().positive(),
  fuel: z.enum(["gas", "etanol"]),
  kilometers: z.number().positive(),
  color: z.string().max(20),
  fipe: z.number().positive(),
  price: z.number().positive(),
  description: z.string().max(100),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  userId: userSchema,
  images: imageSchema
});

const anouncementCreateSchema = anouncementSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    userId: true,
    images: true,
  })
  .extend({ user: userCreateSchema, images: imageCreateSchema });

const anouncementReadSchema = anouncementSchema.array();
const anouncementUpdateSchema = anouncementCreateSchema.deepPartial();

export {
  anouncementCreateSchema,
  anouncementReadSchema,
  anouncementSchema,
  anouncementUpdateSchema,
};
