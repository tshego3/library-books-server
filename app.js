const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('dotenv/config');

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import Routes
const getRoute = require('./routes/get');
app.use('/', getRoute);
const postRoute = require('./routes/post');
app.use('/', postRoute);
const patchRoute = require('./routes/patch');
app.use('/', patchRoute);
const deleteRoute = require('./routes/delete');
app.use('/', deleteRoute);

// MonogoDB Connection
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('MonogoDB connection successful!')
);

app.listen(3000);
