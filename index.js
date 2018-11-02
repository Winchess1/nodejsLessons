var http = require('http');
var fs = require('fs');

const port = process.env.PORT || 3000;

http.createServer((req,res)=>{
	
	fs.readFile('index.html','utf8',(err,data)=>{
	res.writeHead(200,{'content-type':'text/plain'});
	
	if(err) res.write('Bad connection');
	else res.write(data);
	res.end();
	
	});
	
}).listen(port,console.log(`Bound to ${port}`));

console.log(`Port ${port} is opened`);


const league = [
{id:1,name:'zeus'},
{id:2,name:'mars'},
{id:3,name:'hulk'},
];

app.get('/',(req,res)=>{
res.send("hellow");
});

app.get('/league/',(req,res)=>{
	res.send(league);
	
});

app.get('/league/:id',(req,res)=>{
	const leagues = league.find(c => c.id === parseInt(req.params.id));
	if(!leagues) res.status(404).send("id was not found");
	res.send(leagues);
});

const port = process.env.PORT || 3000;
app.listen(port,()=>
console.log(`listenning on port ${port}`));




1.var Http
  var fs
const for port

2.http create aserver
	make fs (filename,code form, func with 2 var

wirte res headear ( status,attri)

if err

else

3.listen port ( 2 attr)

console.log
