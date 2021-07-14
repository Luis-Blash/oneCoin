const {Router} = require('express');
const { check } = require('express-validator')
// Controller
const { getUser, postUser, putUser, deleteUser } = require('../controller/user');
// Helpers
const { emailExist } = require('../helpers');
// Middlewares
const { validateFields } = require('../middlewares');

const router = Router()


router.get('/', getUser);

router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password is required and need more than 6 letters').isLength({min:6}),
    check('email').custom( emailExist),
    validateFields
], postUser);

router.put('/:id', putUser);

router.delete('/:id', deleteUser);

module.exports = router;