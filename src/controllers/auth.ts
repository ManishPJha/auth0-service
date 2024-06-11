import { Request, Response, NextFunction } from "express";

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
  }
};

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

    return res.status(200).json({
      success: true,
      message: "User created successfully",
      requestBody: req.body,
    });
  } catch (error) {
    next(error);
  }
};
