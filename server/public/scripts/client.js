console.log('hello from client');

$(document).ready(handleReady);



function handleReady() {
    console.log('in handleReady')
    $('#add').on('click', add)
    $('#subtract').on('click', subtract)
    $('#multiply').on('click', multiply)
    $('#divide').on('click', divide)
    $('#equals').on('click', equals)
    $('#clear').on('click', clear)
}

function equals( ) {
    console.log( 'in equals' )
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: {
            number0 : $('#number0').val(),
            number1 : $('#number1').val(),
            operator : operator
        }
    }).then(function(response){
        console.log(response);
        getAnswer();
    })
}

function getAnswer(){
    console.log('in getanswer');
    $.ajax({
        method: 'GET',
        url: '/calculate'
    }).then(function(response){
        $('#result').val('')
        renderToDOM(response);
    })
}

let operator = ('')


function add() {
    operator = 'adding'
    console.log(operator);
}

function renderToDOM(calculation) {
    $('#result').empty()
    $('#result').append(`
    <h1>${answer}</h1>
    `)
    console.log('in dom rendering');
}