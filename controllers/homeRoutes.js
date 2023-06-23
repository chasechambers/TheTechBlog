const router = require('express').Router();
const BlogPost = require('../models/BlogPost');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  BlogPost.findAll()
  .then (blogposts => {
    console.log(blogposts)
  })
  
      // res.render('index', {
      //   index: blogpost
      // });
    })


module.exports = router;
