//models
const userModel = require('../models/user.model');

function checkDuplicateEmail(req, res, next) {
    if (req.body.email) {
        userModel.findOne({ email: req.body.email }, (emailFetchErr, emailExists) => {
            if (emailFetchErr) {
                return res.render('index', {title: 'User signup', messages: {error: 'Failed to check the email uniqueness.', success: ''}});
            }
            if (emailExists) {
                return res.render('index', {title: 'User signup', messages: {error: 'Failed!. Email is already in use.', success: ''}});
            }
            next();
        })
    } else {
        return res.render('index', {title: 'User signup', messages: {error: 'Bad request. Parameters missing!!.', success: ''}})
    }
}

module.exports = {
    checkDuplicateEmail: checkDuplicateEmail
}
