import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPatientsBySituationUseCase } from "./ListPatientsBySituationUseCase";

enum Situation {
  ACTIVE = "active",
  FINALIZED = "finalized",
  TRANSFER = "transfer",
}

class ListPatientsBySituationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const splittedPath = request.originalUrl.split("/");

    const type = splittedPath[splittedPath.length - 1] as Situation;

    const listPatientsBySituation = container.resolve(
      ListPatientsBySituationUseCase
    );

    const patients = await listPatientsBySituation.execute(type);

    return response.json(patients);
  }
}

export { ListPatientsBySituationController };
