import express from "express";

/* CONTROLLER IMPORT */
import { signupController,signinController } from "../controller/index.js";

const router = express.Router();

//===================================== User Routes =======================================================//
router.post("/signup", signupController.signUp);
router.post("/signin", signinController.signIn);
//=========================================================================================================//

export default router;
