import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllPatientsUseCase } from "./ListAllPatientsUseCase";

class ListAllPatientsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllPatientsUseCase = container.resolve(ListAllPatientsUseCase);

    const all = await listAllPatientsUseCase.execute();

    return response.json(all);
  }
}

export { ListAllPatientsController };
