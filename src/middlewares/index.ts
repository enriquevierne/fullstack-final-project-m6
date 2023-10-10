import { handleError } from "./handleErrors.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { isOwner } from "./isOwner.middleware";
import { isSeller } from "./isSeller.middleware";
import { isSellerOrOwner } from "./isSellerOrOwner.middleware";
import { userIdExists } from "./userIdExists.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { uniqueDocument } from "./uniqueDocument.middleware";
import { uniqueMobile } from "./uniqueMobile.middleware";

export default {
  handleError,
  isSeller,
  isOwner,
  isSellerOrOwner,
  uniqueEmail,
  uniqueDocument,
  uniqueMobile,
  userIdExists,
  validateBody,
  verifyToken,
};
