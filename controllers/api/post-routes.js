const router = require('express').Router();
const { Post } = require('../../models');
const userAuth = require('../../utils/userAuth');
const postAuth = require('../../utils/postAuth');

//GET all posts
router.get('/', (req, res) => {
    Post.findAll()
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET post by ID
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//POST post
router.post('/', userAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        text: req.body.text,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

//EDIT post
router.put('/:id', userAuth, postAuth, (req, res) => {
    Post.update(
        {   
            title: req.body.title,
            text: req.body.text
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//DELETE post
router.put('/:id', userAuth, postAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;