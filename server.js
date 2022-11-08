const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const { appendFile } = require('fs');
const server = express();
const PORT = 7777;
const MONGO_PASS = process.env.DB_password
const DB_URL = `mongodb+srv://${MONGO_PASS}@to-do-list.fu6kjhl.mongodb.net/?retryWrites=true&w=majority`;

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
    console.log(`Server is up on port ${PORT}`)
});