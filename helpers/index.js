

const dbValidates = require('./db-validates');
const generateJWT = require('./generate-jwt');


module.exports = {
    ...dbValidates,
    ...generateJWT
}