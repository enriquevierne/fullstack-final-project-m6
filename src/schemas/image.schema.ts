import { z } from "zod";

const imageSchema = z.object({
  id: z.number().positive(),
  image_url: z.string().max(255),
  is_cover: z.boolean().default(false),
});

const imageCreateSchema = imageSchema.omit({ id: true });
const imageReadSchema = imageSchema.array();

export { imageCreateSchema, imageReadSchema, imageSchema };
