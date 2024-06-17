import { Request, Response, NextFunction } from "express";

export const catchAsyncFnErrors =
  (Func: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(Func(req, res, next)).catch(next);
  };
