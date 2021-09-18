//npms
require('dotenv').config();
const mongoose = require('mongoose');
const Promise = require('bluebird');

const debugLog = require('../middlewares/debugLog');

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

let mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
let connection_uri = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`;
// connect to mongo db
mongoose.connect(connection_uri, mongooseOptions)
    .then(() => {
        debugLog(`Mongo:: Database ${process.env.MONGO_DBNAME} connection successfull!`);
    })
    .catch(err => {
        debugLog("Connection error", err);
        process.exit();
    });
