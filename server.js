var express=require('express');
var body_parser=require('body-parser');
var mongoose=require('mongoose');
var morgan=require('morgan');


var config=require('./config');

var app=express();


app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
app.use(morgan('dev'));

app.get('*',function(req,res){
	res.sendFile(__dirname+'/public/index.html');
});

app.listen(config.port,function(err){
	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log("Listening on Port 2929");
	}



})