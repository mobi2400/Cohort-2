type User = {
    id:string,
    name:string,
    age:number
}
type users ={
    [key:string]:User
}
type usersRecord = Record<string,User> // same as users

const user:users ={
    "ras@qdi":{
        id:"ras@qdi",
        name:"Rasheed",
        age:22
    },
    "zil@qdi":{
        id:"zil@qdi",
        name:"Zildjian",
        age:22
    }
}

interface useer{
    id:string,
    name:string,
    age:number
}
const useerMap = new Map<string,useer>();
useerMap.set("ras@qdi",{
    id:"ras@qdi",
    name:"Rasheed",
    age:22
})  
useerMap.set("zil@qdi",{
    id:"zil@qdi",
    name:"Zildjian",
    age:22
})
console.log(useerMap.get("ras@qdi")); // { id: 'ras@qdi', name: 'Rasheed', age: 22 }