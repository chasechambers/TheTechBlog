const router = require('express').Router();
const BlogPost = require('../models/BlogPost');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  const blogposts = await BlogPost.findAll();
  console.log(blogposts);
      // res.render('index', {
      //   index: blogpost
      // });
    })


module.exports = router;
