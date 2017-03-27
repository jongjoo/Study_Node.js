var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
    res.send('Hello World page');
});
app.get('/route',function(req,res){
    res.send('Hello Router,<img src="/test.jpeg"');
});
app.get('/login',function(req,res){
    res.send('Login Please')
});
app.listen(3000,function(){
  console.log('Conneted 3000 port!');
});
