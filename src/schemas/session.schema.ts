import { z } from "zod";
import { userSchema } from "./user.schema";

const sessionSchema = userSchema.pick({email: true, password: true});

export { sessionSchema };
