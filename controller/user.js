const { response } = require("express");
const bcryptjs = require('bcrypt');
// Models
const { User } = require('../models')

const getUser = async (req, res = response) => {
    const user = await User.findById(req.uid);
    res.json(user);
}

const postUser = async (req, res = response) => {

    const { name, email, password } = req.body;
    // Encrypt
    const salt = bcryptjs.genSaltSync();
    const passwordHash = bcryptjs.hashSync(password, salt);
    let user;
    if (req.usuarioexiste) {
        user = await User.findByIdAndUpdate(req.uid, { name, status: true, password: passwordHash }, {new: true})
    }else{
        user = new User({ name, email, password: passwordHash });
        await user.save();
    }
    res.json(user);
}

const putUser = async (req, res = response) => {
    const { status, savings_account, _id, password, ...data } = req.body

    // Encrypt
    const salt = bcryptjs.genSaltSync();
    data.password = bcryptjs.hashSync(password, salt);

    const user = await User.findByIdAndUpdate(req.uid, data, {new: true});

    res.json(user)
}

const deleteUser = async (req, res = response) => {
    await User.findByIdAndUpdate(req.uid, { status: false });
    res.json({ msg: 'User delete' })
}

module.exports = {
    deleteUser,
    getUser,
    postUser,
    putUser
}