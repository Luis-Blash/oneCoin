const { response } = require("express");
const bcryptjs = require('bcrypt');
// Helpers
const { generateJWT } = require('../helpers')
// Models
const { User } = require('../models')

const login = async (req, res = response)=>{
    const {email, password} = req.body;
    try{
        const user = await User.findOne({ email });
        // User exists
        if (!user) {
            return res.status(400).json({
                msg: "User / Password are not correct"
            })
        }
        // User status = true
        if (!user.status) {
            return res.status(400).json({
                msg: "User does not exist"
            })
        }
        // verified password
        const validPassword = bcryptjs.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({
                msg: "User / Password are not correct"
            })
        }
        // Generar JWT
        const token = await generateJWT(user.id);

        res.status(200).json({
            usuario: user,
            token
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: "Error Server Login"
        })
    }
}

module.exports = {
    login
}