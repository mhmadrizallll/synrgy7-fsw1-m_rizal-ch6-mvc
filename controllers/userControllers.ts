import { Request, Response } from "express";
import { UsersModel } from "../models/users.model";

const loginViews = async (req: Request, res: Response) => {
  res.render("index");
};

const loginUsers = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await UsersModel.query().findOne({ username });
    if (!user) return res.status(400).json({ message: "user tidak ditemukan" });

    if (user.password !== password)
      return res.status(400).json({ message: "password salah" });

    res.status(200).json({ message: "login berhasil" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "login tidak berhasil" });
  }
};

export { loginViews, loginUsers };
