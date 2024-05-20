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

const createUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password } = req.body;
    const users = await UsersModel.query().insert({
      username,
      email,
      password,
    });
    res.status(201).json({ message: "user created", data: users });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "user not created" });
  }
};

const updateUsers = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  try {
    const { username, email, password } = req.body;
    const users = await UsersModel.query().updateAndFetchById(id, {
      username,
      email,
      password,
    });
    res.status(201).json({ message: "user updated", data: users });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "user not created" });
  }
};

const deleteUsers = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  try {
    const users = await UsersModel.query().deleteById(id);
    res.status(201).json({ message: "user deleted", data: users });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "user not deleted" });
  }
};

export { loginViews, loginUsers, createUsers, updateUsers, deleteUsers };
