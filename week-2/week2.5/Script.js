// HTTP server is created by Express
const express = require('express');
const app = express();
const port = 3000;
function CalculateSum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;}
    return sum;
}
app.get('/',(req, res) => {
    const n = req.query.n;
    const ans = CalculateSum(n);
    res.send(`The sum of numbers from 1 and ${n} is ${ans}`);
    console.log(ans);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// HTTP Request method in terms of doct example
/*
1.GET= going for consultion for checkup
2.POST= going to get a new kidney inserted
3.PUT= going to replace a kidney
4.DELETE= going to remove a kidney
*/
// Status code
/*
1.200= everyrthing is fine
2.201= created
3.400= bad request
4.404= Doctor is not in the hospital
5.500= internal server error
6.411= Inputes were incorrected, wrong person came to surgery
7.403= you were not allowed in the hospital
*/