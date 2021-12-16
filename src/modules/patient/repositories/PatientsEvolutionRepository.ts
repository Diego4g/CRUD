import { getRepository, Repository } from "typeorm";

import { ICreatePatientEvolutionDTO } from "../dtos/ICreatePatientEvolutionDTO";
import { PatientEvolution } from "../entities/PatientEvolution";
import { IPatientsEvolutionRepository } from "./IPatientsEvolutionRepository";

class PatientsEvolutionRepository implements IPatientsEvolutionRepository {
  private repository: Repository<PatientEvolution>;

  constructor() {
    this.repository = getRepository(PatientEvolution);
  }

  async create({
    description,
    user_id,
    patient_id,
  }: ICreatePatientEvolutionDTO): Promise<PatientEvolution> {
    const evolution = this.repository.create({
      user_id,
      patient_id,
      description,
    });

    await this.repository.save(evolution);

    return evolution;
  }
}

export { PatientsEvolutionRepository };
