"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Update with your config settings.
const config = {
    development: {
        client: "pg",
        connection: {
            user: "postgres",
            password: "1",
            port: 5432,
            host: "127.0.0.1",
            database: "db_mvc",
        },
    },
};
module.exports = config;
