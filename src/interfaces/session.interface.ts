import { z } from "zod";
import { sessionSchema, userSchema } from "../schemas";

type SessionCreate = z.infer<typeof sessionSchema>;
type SessionReturn = { token: string; user: string; type: boolean; id: number; };

export { SessionCreate, SessionReturn };
