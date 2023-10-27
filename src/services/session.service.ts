import { compare } from "bcryptjs";
import { User } from "../entities";
import { AppError } from "../errors";
import { SessionCreate, SessionReturn } from "../interfaces";
import { userRepository } from "../repositories";
import { sign } from "jsonwebtoken";

const create = async ({
  email,
  password,
}: SessionCreate): Promise<SessionReturn> => {
  const foundUser: User | null = await userRepository.findOneBy({ email });

  if (!foundUser) throw new AppError("Invalid credentials", 401);

  const matchPassword: boolean = await compare(password, foundUser.password);

  if (!matchPassword) throw new AppError("Invalid credentials", 401);

  const token: string = sign(
    { type: foundUser.type },
    process.env.SECRET_KEY!,
    { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );
  const user = {
    token: token,
    user: foundUser.name,
    type: foundUser.type,
    id: foundUser.id,
  };

  return user;
};

export default { create };
