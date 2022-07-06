const router = require('express').Router();
const controllers = require('../controllers/user.controller');


router.get('/',  controllers.getAll);

router.get('/:id',  controllers.getById);

router.post('/' , controllers.create);

router.put('/:id', controllers.update);

router.delete('/:id', controllers.deleter);

exports.UserRoute = router;