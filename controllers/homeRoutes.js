const router = require('express').Router();
const { BlogPost, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  BlogPost.findAll()
    .then(blogposts => {
      console.log(blogposts)
      res.render('index');
    })
    .catch(err => console.log(err));
})


module.exports = router;
