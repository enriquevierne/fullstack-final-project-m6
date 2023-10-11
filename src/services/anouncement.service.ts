import { AppError } from "../errors";
import { anouncementRepository, userRepository } from "../repositories";

const create = async (payload: any): Promise<any> => {
  const foundAnouncement = anouncementRepository.create(payload);
  const anouncement = await anouncementRepository.save(foundAnouncement);

  return anouncement
};

const read = async (): Promise<any> => {
  const anouncement = await anouncementRepository.find({
    relations: {
      user: true,
    }
  });
  return anouncement
};

const readByUser = async (userId: number): Promise<any> => {
  const anouncementResult = await userRepository.findOne({
    where: {id: userId},
    relations: { anouncements: {user: true}}
  });
  if(!anouncementResult) {
    throw new AppError("User not found", 404)
  }
  return anouncementResult
};

const retrieve = async (anouncementId: number): Promise<any> => {
  const user = await anouncementRepository.findOne(
    {
      relations: {
        user: true,
      },
      where: { id: anouncementId },
    }
  );

  return user;
};

const update = async (anouncement: any, payload: any): Promise<any> => {
  const anouncementUpdated: any = anouncementRepository.create({ ...anouncement, ...payload });
  await anouncementRepository.save(anouncementUpdated);

  return anouncementUpdated
};

const destroy = async (anouncement: any): Promise<void> => {
  await anouncementRepository.softRemove(anouncement);
};

export default { create, update, read, retrieve, readByUser, destroy };
