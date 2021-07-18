

const validateFields = require('./validate-fields');
const userValidate = require('./user-validate');

module.exports = {
    ...validateFields,
    ...userValidate
}