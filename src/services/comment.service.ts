import { AppError } from "../errors";
import { anouncementRepository, commentRepository } from "../repositories";

const create = async (payload: any): Promise<any> => {
  const foundComment = commentRepository.create(payload);
  const comment = await commentRepository.save(foundComment);

  return comment;
};e .

const read = async (anouncementId: number): Promise<any> => {
  const comment = await anouncementRepository.findOne(
    {
      relations: { comments: { user: true }, user: true},
      where: { id: anouncementId },
    }
  );
  return comment
};

const update = async (comment: any, payload: any): Promise<any> => {
  const commentUpdated: any = commentRepository.create({ ...comment, ...payload });
  await commentRepository.save(commentUpdated);

  return commentUpdated;
};

const destroy = async (comment: any): Promise<void> => {
  await commentRepository.softRemove(comment);
};

export default { create, update, read, destroy };
