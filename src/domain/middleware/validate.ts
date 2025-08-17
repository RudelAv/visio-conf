import { NextFunction, Request, Response } from "express";
import { ZodObject, ZodError } from "zod";

export const validate =
  (schema: ZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {

    try {
      schema.parse({
        params: req.params,
        query: req.query,
        body: req.body,
      });

      next();
    } catch (err: any) {
      if (err instanceof ZodError) {
        return res.status(400).json({
            code: "400",
            message: err,
        });
      }
      next(err);
    }
  };