import express from "express";

/* CONTROLLER IMPORT */
import { signupController,signinController,userProfileController } from "../controller/index.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

//===================================== User Routes =======================================================//
router.post("/signup", signupController.signUp);
router.post("/signin", signinController.signIn);
router.get("/userprofile",auth, userProfileController.userProfile);
//=========================================================================================================//

export default router;
