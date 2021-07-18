const {Router} = require('express');
const { check } = require('express-validator')
// Controller
const { getUser, postUser, putUser, deleteUser } = require('../controller/user');
// Helpers
const { userExistsForId } = require('../helpers');
// Middlewares
const { validateFields, emailExist } = require('../middlewares');

const router = Router()


router.get('/', getUser);

router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password is required and need more than 6 letters').isLength({min:6}),
    // check('email').custom( emailExist),
    emailExist,
    validateFields
], postUser);

// private
router.put('/:id',[
    check('id', 'Not is id validate').isMongoId(),
    check('id').custom( userExistsForId ),
    check('password', 'Password is required and need more than 6 letters').isLength({min:6}),
    validateFields
], putUser);

// Private
router.delete('/:id',[
    check('id', 'Not is id validate').isMongoId(),
    check('id').custom( userExistsForId ),
    validateFields
], deleteUser);

module.exports = router;