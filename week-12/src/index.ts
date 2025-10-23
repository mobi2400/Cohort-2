interface user {
    name: string;
    age: number;

}
function SumOfAge(user1: user, user2: user): number {
    return user1.age + user2.age;
}

const result = SumOfAge({ name: "John", age: 30 }, { name: "Jane", age: 25 });
console.log(result);

