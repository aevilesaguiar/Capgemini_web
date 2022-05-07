var express = require('express');
var app = express();

//setando engine para ejs de visualização na ossa pasta publica
app.set('view engine', 'ejs');
app.use(express.static('public'));

//mapeando a raiz para index
app.get('/', function(req,res){
    res.render("../views/index");
});

//a porta que iremos rodar
app.listen(3000, function(){
    console.log('Executando na porta 3000');
});