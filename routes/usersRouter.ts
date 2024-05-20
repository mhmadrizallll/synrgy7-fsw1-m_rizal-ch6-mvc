import express from "express";
import {
  createUsers,
  deleteUsers,
  loginUsers,
  loginViews,
  updateUsers,
} from "../controllers/userControllers";
const router = express.Router();

router.get("/login", loginViews);
router.post("/login", loginUsers);
router.post("/register", createUsers);
router.put("/register/:id", updateUsers);
router.delete("/register/:id", deleteUsers);

export default router;
