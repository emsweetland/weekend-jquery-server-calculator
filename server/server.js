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
//let difference=[];
//let product=[];
//let quotient = [];


// must be added before GET & POST routes
app.use(bodyParser.urlencoded({extended:true}))
// serve up static files (html, css, client js)
app.use(express.static('server/public'));


// GET & POST routes go here

//started routes
app.get('/calculate', function (req, res) {
    console.log('get /calculate')
    res.send(calculation);
})

app.post('/calculate', function (req, res) {
    console.log('POST /calculation');
    console.log(req.body);
    calculation.push({taco : req.body});
    res.send(   );
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})


function calculate(){
    if(operator = 'adding') {
        console.log(operator);
        add();
    }
}

function add (number0, number1) {
    console.log('in add');
    let sum = number0 + number1;
    console.log(sum);
    return calculation.push(sum);
    }










//function subtract (number0, number1) {
//    console.log('in subtract');
//    let sum = number0 - number1;
//    return sum
//}

//function multiply (number0, number1) {
//    console.log('in multiply');
//    let sum = number0 * number1;
//    return sum 
//}

//function divide   (number0, number1) {
//    console.log('in divide');
//    let sum = number0 / number1;
//    return sum
//}





//send 