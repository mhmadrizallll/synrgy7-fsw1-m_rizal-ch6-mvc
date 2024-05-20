"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginControllers_1 = require("../controllers/loginControllers");
const router = express_1.default.Router();
router.get("/login", loginControllers_1.loginViews);
router.post("/login", loginControllers_1.loginUsers);
exports.default = router;
