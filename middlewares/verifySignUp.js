//models
const userModel = require('../models/user.model');

function checkDuplicateEmail(req, res, next) {
    if (req.body.email) {
        userModel.findOne({ email: req.body.email }, (emailFetchErr, emailExists) => {
            if (emailFetchErr) {
                return res.status(500).send(emailFetchErr);
            }
            if (emailExists) {
                return res.status(400).send({ message: 'Failed!. Email is already in use.' });
            }
            next();
        })
    } else {
        return res.status(400).send({ message: 'Bad request. Parameters missing!!' });
    }
}

module.exports = {
    checkDuplicateEmail: checkDuplicateEmail
}
