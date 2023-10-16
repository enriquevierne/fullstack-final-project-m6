import { User } from "../entities";
import { UserCreate, UserReturn, UserUpdate } from "../interfaces";
import { userRepository, addressRepository } from "../repositories";

const create = async (payload: UserCreate): Promise<any> => {
  const { address, ...body } = payload;
  const foundAddress = addressRepository.create(address);
  await addressRepository.save(foundAddress);
console.log(foundAddress);

  const user: User = userRepository.create({
    ...body,
    address: foundAddress,
  });
  await userRepository.save(user);

  return user
};

const update = async (user: User, payload: UserUpdate): Promise<UserReturn> => {
  const userUpdated: User = userRepository.create({ ...user, ...payload });
  await userRepository.save(userUpdated);

  return userUpdated
};

const destroy = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { create, update, destroy };
