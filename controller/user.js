const { response } = require("express");
const bcryptjs = require('bcrypt');
// Models
const { User } = require('../models')

const getUser = async (req, res = response) => {
    const user = await User.find({ status: true });

    if (!user.length) {
        return res.status(400).json({
            msg: 'User not Found'
        })
    }

    res.json(user);
}

const postUser = async (req, res = response) => {

    const { name, email, password } = req.body;

    const user = new User({ name, email, password });

    // Encrypt
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.json(user);
}

const putUser = async (req, res = response) => {
    const { id } = req.params;
    const { status, savings_account, _id, password, ...data } = req.body

    if (password.length == 6) {
        // Encrypt
        const salt = bcryptjs.genSaltSync();
        data.password = bcryptjs.hashSync(password, salt);
    }else{
        return res.status(400).json({msg: 'Password more than 6 letters'})
    }

    const user = await User.findByIdAndUpdate(id, data);

    res.json(user)
}

const deleteUser = (req, res = response) => {
    res.json({ msg: 'delete User' })
}

module.exports = {
    deleteUser,
    getUser,
    postUser,
    putUser
}