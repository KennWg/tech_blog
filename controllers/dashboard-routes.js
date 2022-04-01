const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const userAuth = require('../utils/userAuth');

//GET all posts
router.get('/', userAuth, (req,res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'text',
            'title',
            'created_at'
        ],
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
        attributes: [
            'id',
            'text',
            'title',
            'created_at'
        ],
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
        if(data){const post = data.get({ plain: true });

        res.render('edit-post', {
            post,
            loggedIn: req.session.loggedIn
        });
    }
        else{
            res.status(404).end();
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;