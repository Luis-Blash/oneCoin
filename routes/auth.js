const {Router} = require('express');
const { check } = require('express-validator');
// Controller
const { login } = require('../controller/auth');
// Middlewares
const { validateFields} = require('../middlewares');

const router = Router()

router.post('/login',[
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateFields
], login)

module.exports = router;