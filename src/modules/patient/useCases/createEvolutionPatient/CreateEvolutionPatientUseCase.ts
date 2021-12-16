import { inject, injectable } from "tsyringe";

import { ICreatePatientEvolutionDTO } from "../../dtos/ICreatePatientEvolutionDTO";
import { PatientEvolution } from "../../entities/PatientEvolution";
import { IPatientsEvolutionRepository } from "../../repositories/IPatientsEvolutionRepository";

@injectable()
class CreateEvolutionPatientUseCase {
  constructor(
    @inject("PatientsEvolutionRepository")
    private patientsEvolutionRepository: IPatientsEvolutionRepository
  ) {}

  async execute({
    description,
    user_id,
    patient_id,
  }: ICreatePatientEvolutionDTO): Promise<PatientEvolution> {
    const evolution = await this.patientsEvolutionRepository.create({
      description,
      user_id,
      patient_id,
    });

    return evolution;
  }
}

export { CreateEvolutionPatientUseCase };
