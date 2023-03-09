var a //declaration
var b = '1234'; //delarar /inicializar
b = 'hello'
a = 'world';


//global scope
var fruit = 'apple'


function bestFruit(){
    console.log(fruit);
}

bestFruit();

//global variables by default
function countries(){
    country = 'w';
    console.log(country);
}

countries();
console.log(country);