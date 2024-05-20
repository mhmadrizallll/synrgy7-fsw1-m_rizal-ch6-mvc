import { UsersModel } from "../models/users.model";

export class UsersRepository {
  async findByUsername(username: string): Promise<UsersModel | undefined> {
    return UsersModel.query().findOne({ username });
  }
}
