const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

const myArray = [
  { 
    name: 'George',
    age: 17
  },
  {
    name: "John",
    age: 20
  },
  {
    name: 'Ana',
    age: 38
  }
]

app.get('/', (req, res) => {
  res.json(
    myArray
  );
});

app.listen(PORT, HOST, () => {
  console.log(myArray)
});
