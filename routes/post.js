var posts = [
    {title:'title1',body: 'body1'},
    {title:'title2',body: 'body2'},
    {title:'title3',body: 'body3'}

];
exports.index = function(req, res) {
    res.render('posts/index',{posts: posts});
};

exports.show = function(req, res) {
    res.render('posts/show',{post: posts[req.params.id]});
};
