import express from "express";

import { authController } from "../controllers";
// import { checkJwt } from "../middlewares/checkJWT";

const router = express.Router();

router.route("/generate-token").get(authController.generateAccessToken);
router
  .route("/resend-verification-email")
  .post(authController.resendVerificationEmail);
router.route("/user").post(authController.handleUserPostCreation);

export default router;
