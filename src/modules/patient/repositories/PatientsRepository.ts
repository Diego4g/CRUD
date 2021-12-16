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
    responsable,
  }: ICreatePatientDTO): Promise<Patient> {
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
      responsable,
    });

    await this.repository.save(patient);

    return patient;
  }
}

export { PatientsRepository };
