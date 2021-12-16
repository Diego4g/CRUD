import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePatientUseCase } from "./UpdatePatientUseCase";

class UpdatePatientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      fullName,
      gender,
      clinic,
      age,
      local,
      CPF,
      RG,
      CEP,
      status,
      description,
    } = request.body;

    const { id } = request.user;

    const { patient_id } = request.params;

    const createPatientUseCase = container.resolve(UpdatePatientUseCase);

    await createPatientUseCase.execute({
      patient_id,
      fullName,
      gender,
      clinic,
      age,
      local,
      CPF,
      RG,
      CEP,
      status,
      responsable: id,
      description,
    });

    return response.status(201).send();
  }
}

export { UpdatePatientController };
