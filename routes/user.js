const {Router} = require('express');
// Controller
const { getUser, postUser, putUser, deleteUser } = require('../controller/user');

const router = Router()


router.get('/', getUser);

router.post('/', postUser);

router.put('/:id', putUser);

router.delete('/:id', deleteUser);

module.exports = router;