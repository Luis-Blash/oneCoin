const {Router} = require('express');
const { check } = require('express-validator')
// Controller
const { getUser, postUser, putUser, deleteUser } = require('../controller/user');
// Helpers
const { userExistsForId } = require('../helpers');
// Middlewares
const { validateFields, emailExist, validateJWT } = require('../middlewares');

const router = Router()

// private -- JWT
router.get('/',[
    validateJWT,
    validateFields
], getUser);

router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password is required and need more than 6 letters').isLength({min:6}),
    emailExist,
    validateFields
], postUser);

// private -- JWT
router.put('/',[
    validateJWT,
    check('password', 'Password is required and need more than 6 letters').isLength({min:6}),
    validateFields
], putUser);

// private -- JWT
router.delete('/',[
    validateJWT,
    validateFields
], deleteUser);

module.exports = router;