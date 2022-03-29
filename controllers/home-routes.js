const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post } = require('../models');

router.get('/', (req,res) => {
    Post.findAll({
        attributes: [
            'id',
            
        ]
    })
});

module.exports = router;