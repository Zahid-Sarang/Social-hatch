import express from "express";

/* CONTROLLER IMPORT */
import { signupController,signinController,userProfileController,refreshTokenController } from "../controller/index.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

//===================================== USER ROUTES =======================================================//
router.post("/signup", signupController.signUp);
router.post("/signin", signinController.signIn);
router.get("/userprofile",auth, userProfileController.userProfile);
router.post('/logout',auth ,signinController.logout) // logout route
//=========================================================================================================//


//===================================== REFRESH_TOKEN ROUTES =======================================================//
router.post('/refresh-token',refreshTokenController.refresh_token) // refresh_token route
//=========================================================================================================//

export default router;
