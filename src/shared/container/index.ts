import { container } from "tsyringe";

import { IPatientsEvolutionRepository } from "../../modules/patient/repositories/IPatientsEvolutionRepository";
import { IPatientsRepository } from "../../modules/patient/repositories/IPatientsRepository";
import { PatientsEvolutionRepository } from "../../modules/patient/repositories/PatientsEvolutionRepository";
import { PatientsRepository } from "../../modules/patient/repositories/PatientsRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { IUsersTokensRepository } from "../../modules/users/repositories/IUsersTokensRepository";
import { UsersRepository } from "../../modules/users/repositories/UsersRepository";
import { UsersTokensRepository } from "../../modules/users/repositories/UsersTokensRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);

container.registerSingleton<IPatientsRepository>(
  "PatientsRepository",
  PatientsRepository
);

container.registerSingleton<IPatientsEvolutionRepository>(
  "PatientsEvolutionRepository",
  PatientsEvolutionRepository
);
