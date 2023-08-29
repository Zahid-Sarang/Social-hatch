import express from "express";

/* CONTROLLER IMPORT */
import { signupController } from "../controller/index.js";

const router = express.Router();

//===================================== User Routes =======================================================//
router.post("/signup", signupController.signUp);
//=========================================================================================================//

export default router;
