import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { Patient } from "../../entities/Patient";
import { IPatientsRepository } from "../../repositories/IPatientsRepository";

enum Situation {
  ACTIVE = "active",
  FINALIZED = "finalized",
  TRANSFER = "transfer",
}

enum Gender {
  MASCULINE = "masculine",
  FEMININE = "feminine",
}
interface IRequest {
  patient_id?: string;
  fullName?: string;
  gender?: Gender;
  clinic?: string;
  age?: number;
  local?: string;
  CPF?: string;
  RG?: string;
  CEP?: string;
  status?: Situation;
  responsable: string;
  description?: string;
}

@injectable()
class UpdatePatientUseCase {
  constructor(
    @inject("PatientsRepository")
    private repository: IPatientsRepository
  ) {}

  async execute({
    patient_id,
    fullName,
    gender,
    clinic,
    age,
    local,
    CPF,
    RG,
    CEP,
    status,
    description,
    responsable,
  }: IRequest): Promise<Patient> {
    const patient = await this.repository.findById(patient_id);

    if (!patient) {
      throw new AppError("Patient does not exists!");
    }

    patient.fullName = fullName;
    patient.age = age;
    patient.clinic = clinic;
    patient.description = description;
    patient.gender = gender;
    patient.local = local;
    patient.status = status;
    patient.CEP = CEP;
    patient.CPF = CPF;
    patient.RG = RG;
    patient.responsable = responsable;

    await this.repository.create(patient);

    return patient;
  }
}

export { UpdatePatientUseCase };
