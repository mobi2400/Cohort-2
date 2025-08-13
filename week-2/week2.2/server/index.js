const fs = require('fs');
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/upload', (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send('File uploaded successfully!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});