import { inject, injectable } from "tsyringe";

import { ICreatePatientDTO } from "../../dtos/ICreatePatientDTO";
import { Patient } from "../../entities/Patient";
import { IPatientsRepository } from "../../repositories/IPatientsRepository";

@injectable()
class CreatePatientUseCase {
  constructor(
    @inject("PatientsRepository")
    private patientsRepository: IPatientsRepository
  ) {}

  async execute({
    fullName,
    gender,
    clinic,
    age,
    local,
    CPF,
    RG,
    CEP,
    status,
  }: ICreatePatientDTO): Promise<Patient> {
    const patient = await this.patientsRepository.create({
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

    return patient;
  }
}

export { CreatePatientUseCase };
