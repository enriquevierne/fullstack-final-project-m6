import { handleError } from "./handleErrors.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { isAdmin } from "./isAdmin.middleware";
import { isAdminOrOwner } from "./isAdminOrOwner.middleware";
import { userIdExists } from "./userIdExists.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { uniqueDocument } from "./uniqueDocument.middleware";
import { uniqueMobile } from "./uniqueMobile.middleware";
export default {
  handleError,
  isAdmin,
  isAdminOrOwner,
  uniqueEmail,
  uniqueDocument,
  uniqueMobile,
  userIdExists,
  validateBody,
  verifyToken,
};
