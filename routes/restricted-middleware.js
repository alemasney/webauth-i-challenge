const bcrypt = require('bcryptjs');

const Users = require('../routes/model.js');

module.exports = (req, res, next) => {

    if (req.session && req.session.user) {
        next();
    } else {
        res.status(400).json({ message: 'No credentials provided' });
    }
};
