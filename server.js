const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const router = require('./router/router');
const bodyParser = require('body-parser');
const server = express();
const PORT = process.env.PORT || 7777;
const MONGO_PASS = process.env.DB_PASSWORD;
const DB_URL = `mongodb+srv://${MONGO_PASS}@todolist.7zxfx7v.mongodb.net/?retryWrites=true&w=majority`

mongoose
    .connect(DB_URL, {
        useNewUrlParser: true, useUnifiedTopology: true,
    })
    .then(() => {
        console.log('We are connected to MongoDB')
    })

server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(router);



server.listen(PORT, async () => {
    console.log(`Server is up on port ${PORT}`);
});