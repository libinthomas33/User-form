
require('dotenv').config();
// This function logs console messages when debugMode is true .
function debugLog(logMessage) {
    if (process.env.DEBUG_MODE == 'true') {
        console.log('Debug: ', logMessage);
    }
}
module.exports = debugLog;