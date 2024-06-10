import express from "express";

import { auth } from "../controllers";

const router = express.Router();

router.route("/resend-verification-email").post(auth.resendVerificationEmail);
router.route("/user").post(auth.handleUserPostCreation);

export default router;
