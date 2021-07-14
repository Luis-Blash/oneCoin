const { response } = require("express");
const bcryptjs = require('bcrypt');
// Models
const { User } = require('../models')

const getUser = async (req, res =  response) => {
    const user =  await User.find({status:true});

    if(!user.length){
        return res.status(400).json({
            msg: 'User not Found'
        })
    }

    res.json(user);
}

const postUser = async (req, res =  response) => {
    
    const {name, email, password} = req.body;

    const user = new User({name, email, password});

    // Encrypt
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);
    
    await user.save();
    
    res.json(user);
}

const putUser = (req, res =  response) => {
    res.json({msg: 'put User'})
}

const deleteUser = (req, res =  response) => {
    res.json({msg: 'delete User'})
}

module.exports = {
    deleteUser,
    getUser,
    postUser,
    putUser
}