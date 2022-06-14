const path = require('path');
const express = require('express');
const { Client } = require('@googlemaps/google-maps-services-js');
const app = express();
const client = new Client({}); 
require('dotenv').config({ path: `${__dirname}/../git-one/.env`})

client
    .geocode({
        params:{
            key: process.env.API_KEY
        },
    })
app.use(express.static(path.join(__dirname, '..', 'git-one')))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/../git-one/index.html`);
});

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});