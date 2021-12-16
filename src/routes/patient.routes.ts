import { Router } from "express";

import { CreatePatientController } from "../modules/patient/useCases/createPatient/CreatePatientController";

const patientRoutes = Router();

const createPatientController = new CreatePatientController();

patientRoutes.post("/", createPatientController.handle);

export { patientRoutes };
