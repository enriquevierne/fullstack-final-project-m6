import { Anouncement } from "../entities";
import { AppError } from "../errors";
import {
  anouncementRepository,
  imageRepository,
  userRepository,
} from "../repositories";

const create = async (payload: any): Promise<any> => {
  const { images, ...body } = payload;
  const foundImage = imageRepository.create(images);
  await imageRepository.save(foundImage);
console.log(foundImage);

  const anouncement = anouncementRepository.create({
    ...body,
    images: foundImage,
  });

  await anouncementRepository.save(anouncement);

  return anouncement;
};

const read = async (): Promise<any> => {
  const anouncement = await anouncementRepository.find({
    relations: {
      user: true,
      images: true
    },
  });
  return anouncement;
};

const readByUser = async (userId: number): Promise<any> => {
  const anouncementResult = await userRepository.findOne({
    where: { id: userId },
    relations: { anouncements: { images: true }}
  });
  if (!anouncementResult) {
    throw new AppError("User not found", 404);
  }
  return anouncementResult;
};

const retrieve = async (anouncementId: number): Promise<any> => {
  const user = await anouncementRepository.findOne({
    relations: {
      user: true,
      images: true
    },
    where: { id: anouncementId },
  });

  return user;
};

const update = async (anouncement: any, payload: any): Promise<any> => {
  const anouncementUpdated: any = anouncementRepository.create({
    ...anouncement,
    ...payload,
  });
  await anouncementRepository.save(anouncementUpdated);

  return anouncementUpdated;
};

const destroy = async (anouncement: any): Promise<void> => {
  await anouncementRepository.softRemove(anouncement);
};

export default { create, update, read, retrieve, readByUser, destroy };
