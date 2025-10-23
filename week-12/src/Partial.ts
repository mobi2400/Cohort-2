interface user{
    name: string;
    age: number;
    email: string;
    password: string;
}

type updateUser = Pick<user, "name" | "age" | "password">;

type UpadteUserOptional = Partial<updateUser>;

function updateUser(user: user, updates: UpadteUserOptional){
    user.name = updates.name || user.name;
    user.age = updates.age || user.age;
}