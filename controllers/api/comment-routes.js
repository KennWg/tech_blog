const router = require('express').Router();
const { Comment } = require('../../models');
const userAuth = require('../../utils/userAuth');
const commentAuth = require('../../utils/commentAuth');
const postAuth = require('../../utils/postAuth');

//GET all comments
router.get('/', (req, res) => {
    Comment.findAll()
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET comment by ID
router.get('/:id', (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No comment found with this id' });
                return;
            }
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//POST comment
router.post('/', userAuth, (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
});

//EDIT comment
router.put('/:id', userAuth, commentAuth, (req,res) => {
    Comment.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//DELETE comment
router.delete('/:id', userAuth, commentAuth, (req,res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'No comment found with this id' });
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