const express = require('express');
const controller = require('../controller/movieController');

const router = express.Router();

router.get('/', controller.index);
router.get('/create', controller.create);
router.post('/create', controller.createPost);
router.get('/update/:id', controller.update);
router.post('/update/:id', controller.updatePost);
router.get('/delete/:id', controller.delete);

module.exports = router;