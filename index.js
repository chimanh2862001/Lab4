var express=require('express');
var app=express();
var expressHBS=require('express-handlebars');
app.engine('handlebars',expressHBS({
   layoutsDir:__dirname+'/views/layouts',
    defaultLayout:'main'
}));

app.set('view engine','handlebars');

app.get('/',function (req,res){
  // res.send('Hello World');
  res.render('homepage');
});


app.post('/login',function (req,res){

});

app.listen(process.env.PORT||3000);