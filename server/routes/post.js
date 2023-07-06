const express = require('express');
const router = express.Router();
const {getpost,createPost}=require('../controller/post')


router.post('/getposts',getpost)
router.post('/createpost',createPost)


module.exports = router