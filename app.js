var express = require('express'),
    app = express();
    post = require('./routes/post');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');




app.use(bodyParser.urlencoded({extended: true}));
app.use( methodOverride());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.get('/',post.index);
/*
app.get('/posts/new',post.new);
app.post('/posts/create',post.create);
app.get('/posts/:id`',post.show);
app.get('/posts/:id`',post.edit);
app.put('/posts/:id',post.update);
app.delete('/posts/:id',post.destroy);
*/


app.listen(3000);
console.log("server starting...");
