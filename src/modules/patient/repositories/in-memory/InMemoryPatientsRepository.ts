import { ICreatePatientDTO } from "../../dtos/ICreatePatientDTO";
import { Patient } from "../../entities/Patient";
import { IPatientsRepository } from "../IPatientsRepository";

class InMemoryPatientsRepository implements IPatientsRepository {
  private patients: Patient[] = [];

  async create({
    fullName,
    status,
    local,
    gender,
    clinic,
    age,
    RG,
    CPF,
    CEP,
  }: ICreatePatientDTO): Promise<Patient> {
    const patient = new Patient();

    Object.assign(patient, {
      fullName,
      status,
      local,
      gender,
      clinic,
      age,
      RG,
      CPF,
      CEP,
    });
    this.patients.push(patient);

    return patient;
  }
}

export { InMemoryPatientsRepository };
