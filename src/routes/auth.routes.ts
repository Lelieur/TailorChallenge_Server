import { Router } from "express";
import { signupUser, loginUser } from "../controllers/auth.controllers";
import verifyToken from "../middlewares/verifyToken";

const router = Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/verify", verifyToken);

export default router;