"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUsers = exports.loginViews = void 0;
const usersService_1 = require("../services/usersService");
const user_repository_1 = require("../repositories/user.repository");
const usersRepository = new user_repository_1.UsersRepository();
const usersService = new usersService_1.UsersService(usersRepository);
const loginViews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render("index");
});
exports.loginViews = loginViews;
const loginUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield usersService.validateUser(username, password);
        if (!user)
            return res.status(400).json({ message: "user tidak ditemukan" });
        res.status(200).json({ message: "login berhasil" });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "login tidak berhasil" });
    }
});
exports.loginUsers = loginUsers;
