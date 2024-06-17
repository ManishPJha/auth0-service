import { NextFunction, Request, Response } from "express";

<<<<<<< Updated upstream
// import { prisma } from "../utils/prisma-client";

export const resendVerificationEmail = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Verification email resent successfully",
      requestBody: req.body,
    });
  } catch (error) {
    next(error);
=======
import { getM2MToken } from "../utils/auth-helpers";
import { catchAsyncFnErrors } from "../utils/catchAsyncErrorhandler";
import { prisma } from "../utils/prisma-client";

export const generateAccessToken = catchAsyncFnErrors(
  async (req: Request, res: Response) => {
    if (req.method !== "GET") return res.status(405).end("Method not allowed!");

    const accessToken = await getM2MToken();

    if (!accessToken)
      return res.status(400).json({
        success: false,
        message: "Error generating access token",
      });

    return res.status(200).json({
      success: true,
      message: "Access token generated successfully",
      accessToken,
    });
>>>>>>> Stashed changes
  }
);

export const resendVerificationEmail = catchAsyncFnErrors(
  async (
    req: Request<any, any, { userId: string }>,
    res: Response,
    next: NextFunction
  ) => {
    const userId = req.body.userId;

    const response = await fetch(
      `https://${process.env.AUTH0_DOMAIN}/api/v2/jobs/verification-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
        }),
      }
    );

    if (response.ok) {
      console.log("Verification email resent successfully");
      return res.status(200).json({
        success: true,
        message: "Verification email resent successfully",
        response,
      });
    }

    return res.status(400).json({
      success: false,
      message: "Error resending verification email",
      response,
    });
  }
);

type CreateAuth0UserDto = {
  user_email: string;
  user_id: string;
  is_email_verified: boolean;
};

export const handleUserPostCreation = async (
  req: Request<any, any, CreateAuth0UserDto>,
  res: Response,
  next: NextFunction
) => {
  try {
<<<<<<< Updated upstream
    // const isExist = await prisma.user.findFirst({ where: {
    //   id: data.user_id
    // } });
    // if (isExist) return;

    // const user = await prisma.user.update({ data: {
    //   email: data.user_email,
    //   id: data.user_id,
    //   is_confirmed: data.is_email_verified,
    // }, where: {
    //   id: data.user_id,
    // }})

    // if (user) {
    //   console.log("🚀 ~ handleUserPostCreation ~ user:", user)
    //   return res.status(200).json({
    //     success: true,
    //     message: "User created successfully",
    //     requestBody: req.body
    //   })
    // }
=======
    const data = req.body;

    const isExist = await prisma.user.findFirst({
      where: {
        id: data.user_id,
      },
    });

    if (isExist) return;
>>>>>>> Stashed changes

    return res.status(200).json({
      success: true,
      message: "User created successfully",
      requestBody: req.body,
    });
  } catch (error) {
    next(error);
  }
};
