const { Post } = require('../models')

async function postAuth(req, res, next) {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'user_id'
        ]
    })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            if (data.user_id != req.session.user_id) {
                res.redirect('/login').end();
            } else {
                next();
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

module.exports = postAuth;