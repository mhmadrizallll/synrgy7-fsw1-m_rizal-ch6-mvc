import { Request, Response } from "express";
import { UsersService } from "../services/usersService";
import { UsersRepository } from "../repositories/user.repository";

const usersRepository = new UsersRepository();
const usersService = new UsersService(usersRepository);

const loginViews = async (req: Request, res: Response) => {
  res.render("index");
};

const loginUsers = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await usersService.validateUser(username, password);
    if (!user) return res.status(400).json({ message: "user tidak ditemukan" });
    res.status(200).json({ message: "login berhasil" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "login tidak berhasil" });
  }
};

export { loginViews, loginUsers };
