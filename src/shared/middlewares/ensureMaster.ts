import { Request, Response, NextFunction } from "express";

import { UsersRepository } from "../../modules/users/repositories/UsersRepository";
import { AppError } from "../errors/AppError";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;

  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(id);

  if (!user.isMaster) {
    throw new AppError("User isn't admin!");
  }

  return next();
}
