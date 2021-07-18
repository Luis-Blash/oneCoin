const { User } = require('../models');

/*
*** USER
*/

// User for id
const userExistsForId = async (id)=>{
    const existsUser = await User.findById(id);
    if(!existsUser){
        throw new Error(`Not user exists`)
    }
} 

module.exports = {
    userExistsForId
}