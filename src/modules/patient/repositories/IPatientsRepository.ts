import { ICreatePatientDTO } from "../dtos/ICreatePatientDTO";
import { Patient } from "../entities/Patient";

enum Situation {
  ACTIVE = "active",
  FINALIZED = "finalized",
  TRANSFER = "transfer",
}

interface IPatientsRepository {
  create({
    fullName,
    status,
    local,
    gender,
    clinic,
    age,
    RG,
    CPF,
    CEP,
    responsable,
  }: ICreatePatientDTO): Promise<Patient>;

  findById(id: string): Promise<Patient>;

  listAllPatients(): Promise<Patient[]>;

  listByStatus(status: Situation): Promise<Patient[]>;

  deleteById(patient_id: string): Promise<void>;
}

export { IPatientsRepository };
