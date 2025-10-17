import { Client } from "pg";

const client = new Client({
  connectionString:"postgresql://neondb_owner:npg_AHO1bqu6XlSm@ep-solitary-mode-ad32ottn-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
});

client.connect();

async function PutUserData(){
    const result = await client.query(`INSERT INTO users (username, password) VALUES ('testuser', 'testpass')`);
    console.log(result);
    console.log("User data inserted successfully.");
}

PutUserData();