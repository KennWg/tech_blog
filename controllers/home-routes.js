const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'created_at'
        ]
    })
        .then(data => {
            const posts = data.map(post => post.get({ plain: true }));

            res.render('homepage', {
                posts,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;