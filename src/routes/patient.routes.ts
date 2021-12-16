import { Router } from "express";

import { CreatePatientController } from "../modules/patient/useCases/createPatient/CreatePatientController";
import { DeletePatientController } from "../modules/patient/useCases/deletePatient/DeletePatientController";
import { ListAllPatientsController } from "../modules/patient/useCases/listAllPatients/ListAllPatientsController";
import { ListPatientsBySituationController } from "../modules/patient/useCases/listBySituation/ListPatientsBySituationController";
import { UpdatePatientController } from "../modules/patient/useCases/updateInfo/UpdatePatientController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";
import { ensureMaster } from "../shared/middlewares/ensureMaster";

const patientRoutes = Router();

const createPatientController = new CreatePatientController();
const updatePatientController = new UpdatePatientController();
const listAllPatientsController = new ListAllPatientsController();
const listPatientsBySituationController =
  new ListPatientsBySituationController();
const deletePatientController = new DeletePatientController();

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

patientRoutes.delete(
  "/:id",
  ensureAuthenticated,
  ensureMaster,
  deletePatientController.handle
);

export { patientRoutes };
