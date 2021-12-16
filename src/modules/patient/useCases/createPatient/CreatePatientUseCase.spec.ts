import { InMemoryPatientsRepository } from "../../repositories/in-memory/InMemoryPatientsRepository";
import { CreatePatientUseCase } from "./CreatePatientUseCase";

enum Situation {
  ACTIVE = "active",
  FINALIZED = "finalized",
  TRANSFER = "transfer",
}

enum Gender {
  MASCULINE = "masculine",
  FEMININE = "feminine",
}

let createPatientUseCase: CreatePatientUseCase;
let inMemoryPatientsRepository: InMemoryPatientsRepository;

describe("Create Patient", () => {
  beforeEach(() => {
    inMemoryPatientsRepository = new InMemoryPatientsRepository();
    createPatientUseCase = new CreatePatientUseCase(inMemoryPatientsRepository);
  });

  it("should be able create a new Patient", async () => {
    const patient = await createPatientUseCase.execute({
      fullName: "Alma Kelley",
      CEP: "40946",
      CPF: "23268386",
      RG: "96180515",
      age: 72,
      clinic: "Shawn Potter",
      gender: Gender.FEMININE,
      local: "Edith McKinney",
      status: Situation.ACTIVE,
    });

    expect(patient).toHaveProperty("id");
  });
});
