"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controllers/userControllers");
const router = express_1.default.Router();
router.get("/login", userControllers_1.loginViews);
router.post("/login", userControllers_1.loginUsers);
router.post("/register", userControllers_1.createUsers);
router.put("/register/:id", userControllers_1.updateUsers);
router.delete("/register/:id", userControllers_1.deleteUsers);
exports.default = router;
