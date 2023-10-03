import { z } from "zod";
import {
  userCreateSchema,
  userReturnSchema,
  userSchema,
  userUpdateSchema,
} from "../schemas";
import { DeepPartial, Repository } from "typeorm";

type User = z.infer<typeof userSchema>;
type UserCreate = z.infer<typeof userCreateSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;
type UserUpdate = DeepPartial<UserCreate>;
type UserRead = Array<UserReturn>;
type UserRepo = Repository<User>

export { UserCreate, User, UserRead, UserReturn, UserUpdate, UserRepo };
