

const validateFields = require('./validate-fields');
const userValidate = require('./user-validate');
const validateJWT = require('./validate-jwt');

module.exports = {
    ...validateFields,
    ...userValidate,
    ...validateJWT
}