// write a function to create a table in a database
import { Client } from "pg";

const client = new Client({
  connectionString:"postgresql://neondb_owner:npg_AHO1bqu6XlSm@ep-solitary-mode-ad32ottn-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
});

client.connect();

async function CreateUserTable(){
    // .query helps to write sql queries
  const result = await client.query(`CREATE TABLE  users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);
  console.log(result);
}


CreateUserTable();

