import { z } from "zod";
import {
  anouncementCreateSchema,
  anouncementSchema,
  userCreateSchema,
  userSchema,
} from ".";

const commentSchema = z.object({
  id: z.number(),
  comment_text: z.string().max(255),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  userId: userSchema,
  anouncementId: anouncementSchema,
});

const commentCreateSchema = commentSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    userId: true,
    anouncementId: true,
  })
  .extend({ user: userCreateSchema, anouncement: anouncementCreateSchema }); //

const commentReadSchema = commentSchema.array();
const commentUpdateSchema = commentCreateSchema.deepPartial();

export {
  commentCreateSchema,
  commentReadSchema,
  commentSchema,
  commentUpdateSchema,
};
