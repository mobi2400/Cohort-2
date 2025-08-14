 // ugly method
import express from 'express';
const app = express();
app.use(express.json());

app.get('/healthycheckup', (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.headers.kidneyId;

  if (username === 'admin' && password === 'admin') {
    if(kidneyId == 1 || kidneyId == 2 || kidneyId == 3){
    res.status(200).jhson({
      message: 'Healthy'
    });
    res.status(400).json({
      message: 'Unhealthy'
    });}
 

}});




app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});