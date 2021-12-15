import { container } from "tsyringe";

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
