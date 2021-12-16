import { ICreatePatientDTO } from "../dtos/ICreatePatientDTO";
import { Patient } from "../entities/Patient";

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
}

export { IPatientsRepository };
