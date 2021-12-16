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
    description,
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
      description,
    });

    await this.repository.save(patient);

    return patient;
  }

  async findById(id: string): Promise<Patient> {
    const patient = await this.repository.findOne(id);

    return patient;
  }
}

export { PatientsRepository };
