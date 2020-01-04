const express =require('express');
const app =express();
const fs =require('fs');
const bodyParser = require('body-parser');
const PORT = 3000;



app.use(express.static('.'));
app.use(bodyParser.json());

app.get ('/catalog', (req, res) =>{
	fs.readFile ('data/catalog.json', 'utf-8', (err,data)=>{
		if(err) res.sendStatus(404);
	res.send(data); })
		
	
//	const obj =JSON.parse(data);
//	obj.isActive = true;
//app.get('/hi1', (req,res) =>{
//res.send('hiiii');
//console.log('hi');
});


app.get('/cart', (req,res)=>{

  fs.readFile ('data/cart.json', 'utf-8', (err,data)=>{
		if(err) res.sendStatus(404);
	res.send(data); })


});

app.post('/cart', (req, res) => {
  const item = req.body;
  fs.readFile('data/cart.json', 'utf-8', (err, data) => {
    if (err) res.sendStatus(500);
    const cart = JSON.parse(data);
    cart.push(item);
    fs.writeFile('data/cart.json', JSON.stringify(cart), (err) => {
      if (err) res.sendStatus(500);
      res.sendStatus(200);
    })
  });
});



app.delete ('/cart/:id', (req,res)=>{
const  id = req.params.id;
fs.readFile('data/cart.json', 'utf-8', (err, data) => {
  if (err) res.sendStatus(500);
  const cart = JSON.parse(data);
  cart.splice(id, 1);
 
  fs.writeFile('data/cart.json', JSON.stringify(cart), (err) => {
    if (err) res.sendStatus(500);
    res.sendStatus(200);
  })
});
});



app.listen (PORT,()=>{
	
	console.log(`server up ${PORT}`);
});
