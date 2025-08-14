//cleaner way to aut check by the help of middleware
//Middleware sits in the middle of an application's architecture. It handles various common services that applications need to perform.

import express from "express";
const app = express();
app.use(express.json()); // Parse JSON request bodies
port=3000;

function userMiddleware(req, res, next) {
    if(username != "amdin" || password != "admin"){
        res.status(401).send("Unauthorized");
    }else{
        next();
    }
}
 function kidneyIdMiddleware(req, res, next) {
    if(kidneyId == 1 || kidneyId == 2 || kidneyId == 3){
        next();
    }else{
        res.status(401).send("Unauthorized");
    }
    }
app.get('/healthycheckup', userMiddleware, kidneyIdMiddleware, (req, res) => {
    res.status(200).json({
        message: 'Healthy'
    });
});
app.get('/kidneycheckup',kidneyIdMiddleware, (req, res) => {
    res.status(200).json({
        message: 'Healthy'
    });
});

// if a middleware is need to be called in every endpoint use app.use
// app.use(userMiddleware);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);       
});
