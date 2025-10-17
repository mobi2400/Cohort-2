import { Client } from "pg";

const client = new Client({
  connectionString:"postgresql://neondb_owner:npg_AHO1bqu6XlSm@ep-solitary-mode-ad32ottn-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
});

client.connect();

async function MultipleTables() {


    const result = await client.query(`CREATE TABLE  users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`);
      
      const result1 = await client.query(`CREATE TABLE  todos (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        done BOOLEAN DEFAULT false
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )`);
      console.log(result);
      console.log(result1);
}