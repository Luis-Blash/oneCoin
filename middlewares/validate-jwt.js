const { response } = require("express");
const jwt = require('jsonwebtoken');
const { User } = require('../models')

const validateJWT = async (req, res = response, next) => {
    const token = req.header('x-token');
    // No token
    if (!token) {
        return res.status(400).json({
            msg: "No token"
        })
    }
    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        const user = await User.findById(uid);
        // User
        if (!user) {
            return res.status(400).json({
                msg: "User does not exist"
            })
        }
        // Check if it exists 
        if (!user.status) {
            return res.status(400).json({
                msg: 'User eliminate - JWT'
            })
        }

        // JSON JWT
        // req.user = user;
        req.uid = uid;

        next();
    } catch (error) {
        console.log(error);
        return req.status(401).json({
            msg: "Invalid Token"
        })
    }
}

module.exports = {
    validateJWT
}
