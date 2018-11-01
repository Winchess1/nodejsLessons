const express = require('express');
const app = express();

app.use(express.json());

const army = [
{id:1, name:"soldier"},
{id:2, name:"medic"},
{id:3, name:"engineer"},
];


app.get('/',(req,res)=>{
	res.send('Hello Worlds');	
})

app.get('/army/',(req,res)=>{
	res.send(army);	
})

app.post('/army/',(req,res)=>{
	
	const unit ={
		id:army.lenght+1,
		name:req.body.name;
		
	};	
	army.push(unit);	
	res.send(unit);
	
});

app.get('/army/:id/',(req,res)=>{
	const unit = army.find(c => c.id === parseInt(req.params.id));
	if(!unit) res.status(404).send("no such unit");
		res.send(unit);
})


const port = process.env.PORT || 3000;

app.listen(port,(req,res)=>console.log(`Port ${port} is open`));
