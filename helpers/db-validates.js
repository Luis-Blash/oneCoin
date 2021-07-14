const { User } = require('../models');

/*
*** USER
*/

// Email Exist
const emailExist = async(email = '') => {
    const existEmail = await User.findOne({ email });
    if(existEmail){
        throw new Error(`The email ${email} exist`);
    }
}

module.exports = {
    emailExist
}