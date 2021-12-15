import { container } from "tsyringe";

import { DayjsDateProvider } from "./dateProvider/DayjsDateProvider";
import { IDateProvider } from "./dateProvider/IDateProvider";

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);
