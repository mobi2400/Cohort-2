import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  prisma.user.create({
    data: {
      email: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
    },
  })
  .then((user) => {
    console.log("User inserted successfully:", user);
  })
  .catch((error) => {
    console.error("Error inserting user:", error);
  });
}

insertUser("alice@example.com", "password", "Alice", "Way");