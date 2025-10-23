type User = {
    id:string,
    name:string,
    age:number
}
type userMap = Record<string,User>

const user ={
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