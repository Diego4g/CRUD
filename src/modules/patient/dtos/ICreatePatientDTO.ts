import { Patient } from "../entities/Patient";

export type ICreatePatientDTO = Pick<
  Patient,
  | "CEP"
  | "CPF"
  | "RG"
  | "age"
  | "clinic"
  | "fullName"
  | "gender"
  | "local"
  | "status"
  | "responsable"
>;
