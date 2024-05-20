import express from "express";
import { loginUsers, loginViews } from "../controllers/userControllers";
const router = express.Router();

router.get("/login", loginViews);
router.post("/login", loginUsers);

export default router;
