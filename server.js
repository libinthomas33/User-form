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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const PORT =  process.env.PORT || 8080;
app.listen(PORT, ()=>{
    debugLog(`Server listening on ${PORT}`)
})


/* GET home page. */
app.get('/',function(req,res){
    res.set({
        'Access-control-Allow-Origin': '*'
        });
    return res.render('index', {title: 'User signup'});
})

//navigate all api routes to index route
app.use('/api', index);

// catch 404 and forward to error handler
app.use((req, res) => {
    res.status(404).send({ message: `Route ${req.url} Not found.` });
    return;
});
module.exports = app;
