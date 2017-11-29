const express = require('express'),
    app = express(),
    request = require('request'), // try using request to make the get request 
    // data = require('./src/Api.js'),
    PORT = 3000;

const axios = require('axios');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// app.set('view engine', 'ejs');

app.get('/smallDogParks/:city', (req, res) => {
    let city = req.params.city;
    let baseUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=parks+for+small+dogs+in+' + city + '&key=AIzaSyDzMT1u3RO_JE_WkIpJ3HhJl4JUNlJnjAk';
    axios.get(baseUrl)
        .then(function (result) {
            console.log(result);
            // res.json(data)
            res.json(result.data.results);
        })
        .catch(function (error) {
            console.log(error);
        })
})

app.listen(PORT, () => {
    console.log('coming to you from 3000!') //use nodemon server.js to test if its running 
})