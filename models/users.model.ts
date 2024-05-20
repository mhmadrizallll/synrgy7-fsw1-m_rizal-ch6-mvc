import { Model, ModelObject } from "objection";

export class UsersModel extends Model {
  id!: number;
  username!: string;
  email!: string;
  password!: string;

  static get tableName() {
    return "users";
  }
}

export type Users = ModelObject<UsersModel>;
