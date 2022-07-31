const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(express.urlencoded({extended : true}));
app.use(express.static('server/public'));


// Build out the server-side logic to 
// compute the numbers as appropriate. 
// The server should be able to handle 
// Addition, Subtraction, Multiplication, 
// and Division. Once the calculation is 
// complete, send back the OK. You 
// should do a GET request after the 
// POST to get the actual calculation.

// custom arrays

let calculation = [];
let answer =  { answer : 0};

let num0 = ('')
let num1 = ('')


// must be added before GET & POST routes
app.use(bodyParser.urlencoded({extended:true}))
// serve up static files (html, css, client js)
app.use(express.static('server/public'));


// GET & POST routes go here

//started routes
app.get('/calculate', (req, res) => {
    console.log('get /calculate');
    console.log(answer);
    calculate();
    console.log(answer);
    res.send(answer);
})

app.post('/calculate', (req, res) => {
    console.log('POST / calculation');
    console.log(req.body);
    calculation.push(req.body);
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})


function calculate(){
    for(let taco of calculation){
    num0 = Number(taco.number0);
    num1 = Number(taco.number1);
   if(taco.operator = 'adding') {
        console.log(taco.operator);
        add(num0, num1);
  } return console.log(calculation)
}}

function add () {
  console.log('in add');
   let sum = num0 + num1;
   console.log(sum);
   answer = { answer : sum};
   return console.log(answer)
    }