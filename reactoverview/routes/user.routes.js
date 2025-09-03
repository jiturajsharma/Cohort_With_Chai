import express from 'express'
import { 
    registerUser, loginUser, getMe, verifyUser

} from "../controllers/user.controller.js"
import { isLoggedIn } from '../middlewares/auth.middleware.js'


const router = express.Router()

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", isLoggedIn, getMe);
router.get("/verify/:token", verifyUser);



export default router