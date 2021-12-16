import { Router } from "express";

import { CreatePatientController } from "../modules/patient/useCases/createPatient/CreatePatientController";
import { ListAllPatientsController } from "../modules/patient/useCases/listAllPatients/ListAllPatientsController";
import { UpdatePatientController } from "../modules/patient/useCases/updateInfo/UpdatePatientController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const patientRoutes = Router();

const createPatientController = new CreatePatientController();
const updatePatientController = new UpdatePatientController();
const listAllPatientsController = new ListAllPatientsController();

patientRoutes.post("/", ensureAuthenticated, createPatientController.handle);
patientRoutes.put("/:id", ensureAuthenticated, updatePatientController.handle);
patientRoutes.get("/", ensureAuthenticated, listAllPatientsController.handle);

export { patientRoutes };
