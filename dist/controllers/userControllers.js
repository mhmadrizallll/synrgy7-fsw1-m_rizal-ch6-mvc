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
exports.deleteUsers = exports.updateUsers = exports.createUsers = exports.loginUsers = exports.loginViews = void 0;
const users_model_1 = require("../models/users.model");
const loginViews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render("index");
});
exports.loginViews = loginViews;
const loginUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield users_model_1.UsersModel.query().findOne({ username });
        if (!user)
            return res.status(400).json({ message: "user tidak ditemukan" });
        if (user.password !== password)
            return res.status(400).json({ message: "password salah" });
        res.status(200).json({ message: "login berhasil" });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "login tidak berhasil" });
    }
});
exports.loginUsers = loginUsers;
const createUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const users = yield users_model_1.UsersModel.query().insert({
            username,
            email,
            password,
        });
        res.status(201).json({ message: "user created", data: users });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "user not created" });
    }
});
exports.createUsers = createUsers;
const updateUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const { username, email, password } = req.body;
        const users = yield users_model_1.UsersModel.query().updateAndFetchById(id, {
            username,
            email,
            password,
        });
        res.status(201).json({ message: "user updated", data: users });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "user not created" });
    }
});
exports.updateUsers = updateUsers;
const deleteUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const users = yield users_model_1.UsersModel.query().deleteById(id);
        res.status(201).json({ message: "user deleted", data: users });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "user not deleted" });
    }
});
exports.deleteUsers = deleteUsers;
