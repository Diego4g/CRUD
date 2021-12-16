import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { patientRoutes } from "./patient.routes";
import { usersRoutes } from "./user.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/patients", patientRoutes);
router.use(authenticateRoutes);

export { router };
