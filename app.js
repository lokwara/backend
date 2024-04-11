const express = require('express');

require('dotenv').config();
require('./models/db');

const userRouter = require('./routes/user');
const User = require('./models/user');
/*
require('./models/db');


const User = require('./models/user');
*/
const app = express();

/*app.use((req, res, next) => {
  req.on('data', chunk => {
    const data = (JSON.parse(chunk));
    req.body = data;
     next();
  });
});
*/
app.use(express.json());
app.use(userRouter);

/*const test = async (email, password) => {
  const user = await User.findOne({email: email});
  const result = await user.comparePassword(password);
  console.log(result);
};

test('Lewis1@gmail.com', 'Lewis12345');*/

app.get('/test', (req, res) =>{
  res.send('Hello World');
});



// app.use((req, res, next) => {
//   req.on('data', chunk => {
//     const data = JSON.parse(chunk);
//     req.body = data;
//     next();
//   });
// });

/*
app.use(express.json());


// const test = async (email, password) => {
//   const user = await User.findOne({ email: email });
//   const result = await user.comparePassword(password);
//   console.log(result);
// };

// test('niraj@email.com', 'niraj12');

app.get('/test', (req, res) => {
  res.send('Hello world');
});
/*
app.get('/', (req, res) => {
  res.json({ success: true, message: 'Welcome to backend zone!' });
});
 */
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(8000, () => {
  console.log('port is listening');
});

/*
MongoDB Connection;
mongodb+srv://lokwara:<password>@sims.ipwhbsn.mongodb.net/?retryWrites=true&w=majority&appName=SIMS
 */