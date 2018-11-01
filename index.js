
const express = require('express');
const app = express();

app.get('/',(req,res)=>{

res.send('hello worlds');

});

app.listen(3000,()=>
console.log('listenning on port 3000'));
