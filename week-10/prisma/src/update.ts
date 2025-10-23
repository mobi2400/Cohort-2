import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string;
    lastName: string;
    phoneNumber?: number;
}

async function updateUser(username: string, {
    firstName,
    lastName,
    phoneNumber
}: UpdateParams) {
   const response = await prisma.user.update({
        where: {
            email: username,
        },
        data: {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: "1234567890",
        },
    })

    console.log("user updated successfully:",response);

  
}

updateUser("alice@example.com", { firstName: "john", lastName: "wick" });