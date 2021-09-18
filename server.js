//npm
const express = require('express');
const bodyParser = require('body-parser');
const cors =  require('cors');
const path = require('path');
require('dotenv').config();

//imports
var index = require('./routes/index.route');
const db = require('./config/db');
const debugLog = require('./middlewares/debugLog');

const app = express();
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

const PORT =  process.env.PORT || 8080;
app.listen(PORT, ()=>{
    debugLog(`Server listening on ${PORT}`)
})


/* GET home page. */
app.get('/', function (req, res, next) {
    res.send('Welcome to Express.js');
});

//navigate all api routes to index route
app.use('/api', index);

// catch 404 and forward to error handler
app.use((req, res) => {
    res.status(404).send({ message: `Route ${req.url} Not found.` });
    return;
});
module.exports = app;
