var express = require('express'),
    app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.get('/',function(req, res){
  res.render('index', {title: 'title'});
})

app.param('id',function(req, res, next, id){
  var users = ['japan','korea','china'];
  req.params.name = users[id];
  next();
})

app.get('/new',function(req, res){
  res.render('new');
});

app.post('/create',function(req, res){
  res.send(req.body.name);
});



app.listen(3000);
console.log("server starting...");
