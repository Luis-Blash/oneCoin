const { User } = require('../models');

/*
*** USER
*/

// Email Exist
const emailExist = async(email = '') => {
    const existsEmail = await User.findOne({ email });
    if(existsEmail){
        throw new Error(`The email ${email} exists`);
    }
}

// User for id
const userExistsForId = async (id)=>{
    const existsUser = await User.findById(id);
    if(!existsUser){
        throw new Error(`Not user exists`)
    }
} 

module.exports = {
    emailExist,
    userExistsForId
}