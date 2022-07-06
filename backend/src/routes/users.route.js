
/**
 * Users router
 */
const router = require('express').Router();
const { registerDefinition } = require('swaggiffy');
const controllers = require('../controllers/user.controller');


router.get('/',  controllers.getAll);

router.get('/:id',  controllers.getById);

router.post('/' , controllers.create);

router.delete('/:id', controllers.deleter);

registerDefinition(router, {tags: 'Users', mappedSchema: 'User', basePath: '/api/users'});

exports.UserRoute = router;