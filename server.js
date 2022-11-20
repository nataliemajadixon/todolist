const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const router = require('./router/router');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const server = express();
const PORT = process.env.PORT || 7777;
const MONGO_PASS = process.env.DB_PASSWORD;

// const DB_URL = `mongodb+srv://${MONGO_PASS}@todolist.x5gi9tn.mongodb.net/?retryWrites=true&w=majority`
const DB_URL = `mongodb+srv://${MONGO_PASS}@todolist.sweq1il.mongodb.net/?retryWrites=true&w=majority`
server.set("views", './views')
server.set("view engine", "ejs")

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

server.use(express.static("public"))
// server.use(express.static(__dirname + '/public'));
// server.use(express.static(path.join(__dirname, 'public')))


server.listen(PORT, async () => {
    console.log(`Server is up on port ${PORT}`);
});