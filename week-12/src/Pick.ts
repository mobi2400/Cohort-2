
interface user {
    id : string;
    name: string;
    age: number;
    email: string;
    password: string;
}

interface UpadteUser {
    name: string;
    age: number;
    password: string;
}
// better way to write UpdateUser
type DisplayPerson = Pick<user, "name" | "age" | "password">

function updateUser(user: user, updates: UpadteUser) {
    user.name = updates.name;
    user.age = updates.age;
    user.password = updates.password;
}
function displayUser(user: DisplayPerson) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.password);
}
