const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('dotenv/config');

// Import Routes
const getRoute = require('./routes/get');
app.use('/', getRoute)

// MonogoDB Connection
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('MonogoDb connection successful!')
);

app.listen(3000);
