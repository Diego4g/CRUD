import { ICreatePatientEvolutionDTO } from "../dtos/ICreatePatientEvolutionDTO";
import { PatientEvolution } from "../entities/PatientEvolution";

interface IPatientsEvolutionRepository {
  create({
    description,
    user_id,
    patient_id,
  }: ICreatePatientEvolutionDTO): Promise<PatientEvolution>;
}

export { IPatientsEvolutionRepository };
