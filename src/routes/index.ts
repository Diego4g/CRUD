import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { patientRoutes } from "./patient.routes";
import { patientEvolutionRoutes } from "./patientEvolution.routes";
import { usersRoutes } from "./user.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/patients", patientRoutes);
router.use("/evolution", patientEvolutionRoutes);
router.use(authenticateRoutes);

export { router };
