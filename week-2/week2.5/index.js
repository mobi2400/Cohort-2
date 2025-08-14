const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


var users = [{
    name:"john",
    age:22,
    kidneys:[{
        healthy:false
    }]
}]
function isthereanybadkidney(kidneys){
    for(let i=0; i<kidneys.length; i++){
        if(!kidneys[i].healthy){
            return true;
        }
    }
    return false;
}
app.get('/', (req, res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthykidneys = 0;
    for(let i = 0; i < numberOfKidneys; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthykidneys++;
        }
    }
    res.json({
        numberOfKidneys,
        numberOfHealthykidneys
    })

    console.log(johnKidneys);
    
    
});


app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        message:"kidney added"
    })
    
})

app.put('/', (req, res) => {
    for(let i=0; i<users[0].kidneys.length; i++){
         users[0].kidneys[i].healthy = true;
    }
   
    res.json({
        message:"kidney added"
    })
    
})

app.delete('/', (req, res) => {
    const newKidneys = [];
  
    for(let i=0; i<users[0].kidneys.length; i++){
          if(!isthereanybadkidney(users[0].kidneys)){
        res.status(411).json({message:"you have no kidney to delete"});
    }
          if(users[0].kidneys[i].healthy==true){
           res.status(411).json({message:"you have no kidney to delete"});
         };

        if(users[0].kidneys[i].healthy){
            newKidneys.push(users[0].kidneys[i]);
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        message:" only healthy kidney added"
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});