async function postAuth(req, res, next) {
    const response = await fetch(`/api/posts/${req.params.id}`, {
        method: 'get'
    });

    if(response.user_id != req.session.user_id){
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = postAuth;