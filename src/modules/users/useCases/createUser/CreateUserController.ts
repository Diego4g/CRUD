import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createUser = container.resolve(CreateUserUseCase);

    await createUser.execute({
      email,
      password,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
