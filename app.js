var express = require('express');
var app = express();

app.locals.pretty = true;
app.set('view engine','jade');
app.set('views','./views');
app.use(express.static('public'));
app.get('/form',function(req,res){
  res.render('form');
});
app.get('/form_receiver',function(req,res){
  var title = req.query.title;
  var description = req.query.description;
  res.send(title+','+description);
});
app.post('/form_receiver',function(req,res){
  var title = req.body.title;
  var description = req.body.description;
})
app.get('/topic/:id',function(req,res){
  var topics = [
    'Javascript is ...',
    'Node.js is ...',
    'Express is ...'
  ];
  var output=`
  <a href="topic?id=0">JavaScript</a><br>
  <a href="topic?id=1">Nodejs</a><br>
  <a href="topic?id=2">Express<br></a>
  ${topics[req.params.id]}`
  //params.id 로쓸때는 /0 등으로 매칭이됌
  //qurry.id 를 쓸때는 id=0 으로 쓰고
  // 값이 변함에따라 토픽에 저장되는게 달라짐.
  res.send(output);
})
app.get('totpic/:id/:mode',function(req,res){
  res.send(req.parmas.id+','+req.parmas.mode);
})
app.get('/template',function(req,res){
  res.render('temp',{time:Date(),title:'jj'});
})
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
