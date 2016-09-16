var express = require('express'),
    app = express();
    post = require('./routes/post');
var bodyParser = require('body-parser');
var connect        = require('connect')
var methodOverride = require('method-override');

var logger  = require('morgan');
app.use(logger('dev'));


app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(function(err, req, res, next){
  res.send(err.message);
});


app.get('/',post.index);
app.get('/posts/:id([0-9]+)',post.show);
app.get('/posts/new',post.new);
app.post('/posts/create',post.create);
app.get('/posts/:id/edit',post.edit);
app.put('/posts/:id',post.update);
app.delete('/posts/:id',post.destroy);


/*
app.put('/posts/:id',post.update);
app.delete('/posts/:id',post.destroy);
*/


app.listen(3000);
console.log("server starting...");
