type user = {
    readonly name: string; // name is a read-only property
    age: number;
    readonly email: string;
    password: string;

}

const User : user = {
    name: "John",
    age: 30,
    email: "kVt2r@example.com",
    password: "password",  
}

User.name = "Zildjian"; // Error: Cannot assign to 'name' because it is a read-only property
User.email = "yKU7M@example.com"; // Error: Cannot assign to 'email' because it is a read-only property