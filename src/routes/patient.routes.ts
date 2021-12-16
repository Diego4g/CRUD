import { Router } from "express";

import { CreatePatientController } from "../modules/patient/useCases/createPatient/CreatePatientController";
import { ListAllPatientsController } from "../modules/patient/useCases/listAllPatients/ListAllPatientsController";
import { ListPatientsBySituationController } from "../modules/patient/useCases/listBySituation/ListPatientsBySituationController";
import { UpdatePatientController } from "../modules/patient/useCases/updateInfo/UpdatePatientController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const patientRoutes = Router();

const createPatientController = new CreatePatientController();
const updatePatientController = new UpdatePatientController();
const listAllPatientsController = new ListAllPatientsController();
const listPatientsBySituationController =
  new ListPatientsBySituationController();

patientRoutes.post("/", ensureAuthenticated, createPatientController.handle);
patientRoutes.put("/:id", ensureAuthenticated, updatePatientController.handle);
patientRoutes.get("/", ensureAuthenticated, listAllPatientsController.handle);
patientRoutes.get(
  "/transfer",
  ensureAuthenticated,
  listPatientsBySituationController.handle
);
patientRoutes.get(
  "/active",
  ensureAuthenticated,
  listPatientsBySituationController.handle
);
patientRoutes.get(
  "/finalized",
  ensureAuthenticated,
  listPatientsBySituationController.handle
);

export { patientRoutes };
