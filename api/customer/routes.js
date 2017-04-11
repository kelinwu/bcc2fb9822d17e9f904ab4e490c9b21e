const router = require('express').Router(),
      controller = require('./controller');

router.route('/')
      .get(controller.getAll);

router.route('/:id')
      .get(controller.getOne);

module.exports = router;