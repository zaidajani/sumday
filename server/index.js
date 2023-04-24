const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const user = require('./routes/user.routes');
const cors = require('cors');
const auth = require('./routes/auth.routes');
const app = express();

mongoose
  .connect('mongodb://localhost/sumday', {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Connected to mongoDB');
  })
  .catch((err) => {
    console.log(err);
  })

app.use(cors());
app.use('/user', user);
app.use('/auth', auth);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from sumday');
});

app.listen(port, () => {
  console.log('Running on port ' + port);
})