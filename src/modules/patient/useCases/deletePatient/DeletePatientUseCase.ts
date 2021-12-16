import { inject, injectable } from "tsyringe";

import { IPatientsRepository } from "../../repositories/IPatientsRepository";

@injectable()
class DeletePatientUseCase {
  constructor(
    @inject("PatientsRepository")
    private repository: IPatientsRepository
  ) {}

  async execute(patient_id: string): Promise<void> {
    await this.repository.deleteById(patient_id);
  }
}

export { DeletePatientUseCase };
