import express from 'express'
import { 
    registerUser, loginUser, getMe, verifyUser, logoutUser

} from "../controllers/user.controller.js"
import { isLoggedIn } from '../middlewares/auth.middleware.js'


const router = express.Router()

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", isLoggedIn, getMe);
router.get("/verify/:token", verifyUser);
router.get("/logout",isLoggedIn, logoutUser);



export default router