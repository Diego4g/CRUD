import { Router } from "express";

import { CreatePatientController } from "../modules/patient/useCases/createPatient/CreatePatientController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const patientRoutes = Router();

const createPatientController = new CreatePatientController();

patientRoutes.post("/", ensureAuthenticated, createPatientController.handle);

export { patientRoutes };
