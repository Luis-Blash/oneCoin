const { response } = require("express");
const { User } = require('../models');


const  emailExist = async (req, res = response, next) =>{
    const {email} = req.body;
    const user = await User.findOne({ email });
    if(!user){
        next();
    }else{
        let {_id:id, status} = user;
        if(status){
            return res.status(400).json({
                errors: `The email ${email} exists`
            })
        }else{
            req.usuarioexiste = true;
            req.uid = id;
            next();
        }
    }
}

module.exports = {
    emailExist
}