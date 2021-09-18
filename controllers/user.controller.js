//models
const userModel = require('../models/user.model');


const debugLog = require('../middlewares/debugLog');

exports.saveUser = (req, res) => {
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
            if (userSaveErr) {
                return res.status(500).send(roleFetchErr);
            }
            res.status(200).send({ message: 'User was registered successfully!' });
        })
    } else {
        res.status(401).send({ message: 'Bad Request!. Parameter missing.' })
    }
}
