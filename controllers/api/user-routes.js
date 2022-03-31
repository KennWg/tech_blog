const router = require('express').Router();
const { User, Post, Comment } = require("../../models");

//GET all route
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET user by ID
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'text', 'created_at']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            }
        ]
    }).then(data => {
        if (!data) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(data);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET user by username (to see if there is an existing user with the name)
router.get('/username/:username', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            username: req.params.username
        }
    }).then(data => {
        if (!data) {
            res.status(404).json({message: 'No user found with this username'});
            return;
        }
        res.json(data);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//POST new user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
        .then(data => {
            req.session.save(() => {
                req.session.user_id = data.id;
                req.session.username = data.username;
                req.session.loggedIn = true;

                res.json(data);
            });
        })
});

//LOGIN 
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(data => {
        if (!data) {
            res.status(400).json({ message: 'No user found.' });
            return;
        }

        const validPassword = data.passwordCheck(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = data.id;
            req.session.username = data.username;
            req.session.loggedIn = true;

            res.json({message: 'You are now logged in!' });
        });
    });
});

//LOGOUT
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;