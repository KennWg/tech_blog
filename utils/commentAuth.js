async function commentAuth(req, res, next) {
    const response = await fetch(`/api/comments/${req.params.id}`, {
        method: 'get'
    });

    if(response.user_id != req.session.user_id){
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = commentAuth;