import { AppError } from "../errors";
import { anouncementRepository, commentRepository } from "../repositories";

const create = async (payload: any): Promise<any> => {
  const foundComment = commentRepository.create(payload);
  const comment = await commentRepository.save(foundComment);

  return comment;
};

const read = async (): Promise<any> => {
  const comment = await commentRepository.find({
    relations: {
      user: true,
    }
  });
  return comment
};

const update = async (comment: any, payload: any): Promise<any> => {
  const commentUpdated: any = commentRepository.create({ ...comment, ...payload });
  await commentRepository.save(commentUpdated);

  return commentUpdated;
};

const destroy = async (user: any): Promise<void> => {
  await commentRepository.softRemove(user);
};

export default { create, update, read, destroy };
