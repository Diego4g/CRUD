import { inject, injectable } from "tsyringe";

import { Patient } from "../../entities/Patient";
import { IPatientsRepository } from "../../repositories/IPatientsRepository";

@injectable()
class ListAllPatientsUseCase {
  constructor(
    @inject("PatientsRepository")
    private repository: IPatientsRepository
  ) {}

  async execute(): Promise<Patient[]> {
    const patients = await this.repository.listAllPatients();

    return patients;
  }
}

export { ListAllPatientsUseCase };
