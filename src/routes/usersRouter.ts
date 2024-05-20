import express from "express";
import { loginViews, loginUsers } from "../controllers/loginControllers";
const router = express.Router();

router.get("/login", loginViews);
router.post("/login", loginUsers);

export default router;
