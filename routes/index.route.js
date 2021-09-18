const express = require('express');
const router = express.Router();

//routes
const userRoutes = require('./user.route');


router.get('/', (req, res) =>//route to verify the api route is ok
    res.status(200).send('OK')
);

router.use('/user', userRoutes);

//export default router;
module.exports = router;