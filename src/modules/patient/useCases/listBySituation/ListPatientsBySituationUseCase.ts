import { inject, injectable } from "tsyringe";

import { Patient } from "../../entities/Patient";
import { IPatientsRepository } from "../../repositories/IPatientsRepository";

enum Situation {
  ACTIVE = "active",
  FINALIZED = "finalized",
  TRANSFER = "transfer",
}

@injectable()
class ListPatientsBySituationUseCase {
  constructor(
    @inject("PatientsRepository")
    private repository: IPatientsRepository
  ) {}

  async execute(status: Situation): Promise<Patient[]> {
    const patients = await this.repository.listByStatus(status);

    return patients;
  }
}

export { ListPatientsBySituationUseCase };
