import { getRepository, Repository } from "typeorm";

import { ICreatePatientDTO } from "../dtos/ICreatePatientDTO";
import { Patient } from "../entities/Patient";
import { IPatientsRepository } from "./IPatientsRepository";

class PatientsRepository implements IPatientsRepository {
  private repository: Repository<Patient>;

  constructor() {
    this.repository = getRepository(Patient);
  }
  async create({
    fullName,
    gender,
    clinic,
    age,
    local,
    CPF,
    RG,
    CEP,
    status,
  }: ICreatePatientDTO): Promise<void> {
    const patient = this.repository.create({
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

    await this.repository.save(patient);
  }
}

export { PatientsRepository };
