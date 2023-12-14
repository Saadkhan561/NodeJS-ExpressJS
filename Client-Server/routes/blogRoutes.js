const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');

router.get('/', blogController.blog_index);
router.get('/blog/:id', blogController.blog_details);
router.get('/blogs/create', blogController.blog_create);
router.post('/blogs', blogController.blog_create_post);
router.delete('/blogs/:id', blogController.blog_delete);

module.exports = router;
