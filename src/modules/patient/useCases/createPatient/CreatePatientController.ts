import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePatientUseCase } from "./CreatePatientUseCase";

class CreatePatientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { fullName, gender, clinic, age, local, CPF, RG, CEP, status } =
      request.body;

    const createPatientUseCase = container.resolve(CreatePatientUseCase);

    await createPatientUseCase.execute({
      fullName,
      gender,
      clinic,
      age,
      local,
      CPF,
      RG,
      CEP,
      status,
    });

    return response.status(201).send();
  }
}
export { CreatePatientController };
