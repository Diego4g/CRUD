import { Router } from "express";

import { CreateEvolutionPatientController } from "../modules/patient/useCases/createEvolutionPatient/CreateEvolutionPatientController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const patientEvolutionRoutes = Router();

const createEvolutionPatientController = new CreateEvolutionPatientController();

patientEvolutionRoutes.post(
  "/",
  ensureAuthenticated,
  createEvolutionPatientController.handle
);

export { patientEvolutionRoutes };
