const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => {
  res.send('hello from sumday');
});

app.listen(port, () => {
  console.log('Running on port ' + port);
})