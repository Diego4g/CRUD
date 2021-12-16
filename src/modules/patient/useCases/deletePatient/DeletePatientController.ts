import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePatientUseCase } from "./DeletePatientUseCase";

class DeletePatientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletePatientController = container.resolve(DeletePatientUseCase);

    await deletePatientController.execute(id);

    return response.status(204).send();
  }
}

export { DeletePatientController };
