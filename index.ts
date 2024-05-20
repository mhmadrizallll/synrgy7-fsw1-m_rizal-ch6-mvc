import express, { Express, Response } from "express";
import knex from "knex";
import { Model } from "objection";
import router from "./src/routes";
import path from "path";

const knexInstance = knex({
  client: "pg",
  connection: {
    user: "postgres",
    password: "1",
    port: 5432,
    host: "127.0.0.1",
    database: "db_mvc",
  },
});

Model.knex(knexInstance);

const app: Express = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
