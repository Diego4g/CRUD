import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateEvolutionPatientUseCase } from "./CreateEvolutionPatientUseCase";

class CreateEvolutionPatientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, patient_id } = request.body;

    const { id } = request.user;

    const createEvolutionUseCase = container.resolve(
      CreateEvolutionPatientUseCase
    );

    await createEvolutionUseCase.execute({
      description,
      user_id: id,
      patient_id,
    });

    return response.status(201).send();
  }
}

export { CreateEvolutionPatientController };
