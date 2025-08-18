// Hashing -  encrypting the message with standard algorithms and one way
// Salting -  adding a random value to the message
// encryption -  two way encryption

// Jason Web Token(JWT) - token(json only) based authentication
// its neither of encrryption nor hashing rather its a digital signature
// signature can be verified using the password
// JWT - 3 parts
// 1. Header -> algorithm   
// 2. Payload -> user data
// 3. Signature -> hash of header and payload
// anyone with jwt can decode the payload

import express from 'express';
import jwt, { decode } from 'jsonwebtoken';
const app = express();
const port = 3000;
app.use(express.json());
const jwtPassword = '123456';

const ALL_USERS = [
    {
        username: 'admin',
        password: '123456'
    },
    {
        username: 'user',
        password: '123456'
    },
    {
        username: 'guest',
        password: '123456'
    }
]
function userExists(username, password) {
    const user = ALL_USERS.find(user => user.username === username && user.password === password);
    return user ? true : false;
}

app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    if(!userExists(username, password)) {
        res.status(403).json({
            message: 'User does not exist'
        })
        var token = jwt.sign({username: username}, '123456', {expiresIn: '1h'});
        res.json({
            token: token
        })
    
    }
})
app.get('/user', (req, res) => {
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        res.json({
            username: username
        })
    }catch(err){
        res.status(401).json({
            message: 'Unauthorized'
        })
    } 
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
/*
JWT  createa a tokens
User get back atoken after the sign in request
user sends back the tokens in all authenticated requests
*/