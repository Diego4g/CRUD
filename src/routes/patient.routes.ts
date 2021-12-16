import { Router } from "express";

import { CreatePatientController } from "../modules/patient/useCases/createPatient/CreatePatientController";
import { UpdatePatientController } from "../modules/patient/useCases/updateInfo/UpdatePatientController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const patientRoutes = Router();

const createPatientController = new CreatePatientController();
const updatePatientController = new UpdatePatientController();

patientRoutes.post("/", ensureAuthenticated, createPatientController.handle);
patientRoutes.put("/:id", ensureAuthenticated, updatePatientController.handle);

export { patientRoutes };
