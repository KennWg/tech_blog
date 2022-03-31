const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const userAuth = require('../utils/userAuth');

//GET all posts
router.get('/', userAuth, (req,res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                model: User,
                attributes: ['username']
              }
            },
            {
              model: User,
              attributes: ['username']
            }
        ]
    })
    .then(data => {
        const posts = data.map(post => post.get({ plain: true }));

        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Edit post
router.get('/edit/:id', userAuth, (req,res) => {
    Post.findByPk(req.params.id, {
        include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                model: User,
                attributes: ['username']
              }
            },
            {
              model: User,
              attributes: ['username']
            }
        ]
    })
    .then(data => {
        const posts = data.map(post => post.get({ plain: true }));

        res.render('edit-post', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;