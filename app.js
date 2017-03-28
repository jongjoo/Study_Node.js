var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
    res.send('Hello World page');
});
app.get('/dynamic',function(req,res){
  var lis = '';
  for(var i=0;i<5;i++){
    lis = lis + '<li>coding</li>'
  }
  var time = Date();
  var output =`<!DOCTYPE html>
  <html lang="ko">
  <head>
  <title>jj</title>
  </head>
  <body>

  </body>
  hello World.
  <ul>
  ${lis}
  </ul>
  ${time}
  </html>
`;
  res.send(output);
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
