import { User } from "../entities";
import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { userRepository } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);
  await userRepository.save(user);

  return userReturnSchema.parse(user);
};

const read = async (): Promise<UserRead> => {
  return userReadSchema.parse(await userRepository.find());
};

const update = async (user: User, payload: UserUpdate): Promise<UserReturn> => {
  const userUpdated: User = userRepository.create({...user, ...payload});
  await userRepository.save(userUpdated);

  return userReturnSchema.parse(userUpdated)
};

const destroy = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { create, read, update, destroy };
