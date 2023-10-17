import { handleError } from "./handleErrors.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { isSeller } from "./isSeller.middleware";
import { isSellerOrOwner } from "./isSellerOrOwner.middleware";
import { userIdExists } from "./userIdExists.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { uniqueDocument } from "./uniqueDocument.middleware";
import { uniqueMobile } from "./uniqueMobile.middleware";
import { AnouncementIdExists } from "./anouncementIdExists.middleware";
import { CommentIdExists } from "./commentIdExists.middleware";
import { isOwnerAnouncement } from "./isOwnerAnouncement.middleware";
import { isOwnerComment } from "./isOwnerComment.middleware";
import { isOwner } from "./isOwner.middleware";

export default {
  handleError,
  isSeller,
  isOwnerAnouncement,
  isOwnerComment,
  isOwner,
  isSellerOrOwner,
  uniqueEmail,
  uniqueDocument,
  uniqueMobile,
  userIdExists,
  validateBody,
  verifyToken,
  AnouncementIdExists,
  CommentIdExists
};
