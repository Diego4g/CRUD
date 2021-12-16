enum Situation {
  ACTIVE = "active",
  FINALIZED = "finalized",
  TRANSFER = "transfer",
}

enum Gender {
  MASCULINE = "masculine",
  FEMININE = "feminine",
}
interface ICreatePatientDTO {
  fullName: string;
  gender: Gender;
  clinic: string;
  age: number;
  local: string;
  CPF: string;
  RG: string;
  CEP: string;
  status: Situation;
  responsable: string;
  description?: string;
}

export { ICreatePatientDTO };
