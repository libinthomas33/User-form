//models
const userModel = require('../models/user.model');


const debugLog = require('../middlewares/debugLog');

exports.saveUser = (req, res) => {//api to create user with unique email
    if (req.body.firstname && req.body.email && req.body.phone) {
        const user = new userModel({
            firstname: req.body.firstname ? req.body.firstname : '',
            lastname: req.body.lastname ? req.body.lastname : '',
            introduction: req.body.introduction ? req.body.introduction : '',
            email: req.body.email ? req.body.email : '',
            phone: req.body.phone ? req.body.phone : '',
            experience: req.body.experience ? req.body.experience : '',
            achievements: req.body.achievements ? req.body.achievements : '',
        });
        user.save((userSaveErr, savedUser) => {
            if (userSaveErr) {//return error if failed to save
                debugLog(`user save: ${userSaveErr}`)
                return res.render('index', { title: 'User signup', messages: { error: 'Failed to save the user details.', success: '' } });
            }
            res.render('index', { title: 'User signup', messages: { error: '', success: 'User was registered successfully!' } });//return success on user creation
        })
    } else {
        res.render('index', { title: 'User signup', messages: { error: 'Bad Request!. Parameter missing.', success: '' } });//return parameter missing error
    }
}

exports.listUser = async (req, res) => {
    await userModel.find().select('firstname lastname email')//fetch all users from db
        .then((user) => {
            if (user) {//if success return all users
                return res.render('user-list', { title: 'User List', userData: user });
            } else {//else return error message
                return res.render('user-list', { title: 'User List', userData: [] });
            }
        })
        .catch(err => { return res.render('user-list', { title: 'User List', userData: [] }) })
}

exports.getUserById = async (req, res) => {
    let userId = req.params.id
    if (!userId) {
        return res.status(400).send({ 'message': 'User ID missing' })
    }
    await userModel.findById(userId)//fetch users from db
        .then((user) => {
            if (user) {//if success return users data
                return res.render('user-detail', { user: user });
            } else {//else return error message
                return res.render('user-detail', { user: {} });
            }
        })
        .catch(err => { return res.render('user-detail', { user: {} }) });
}
