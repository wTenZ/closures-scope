const myGlobal = 0;

function getGlobal(){
    const myNumber = 1;
    console.log(myNumber);
    
    function parent(){ //funcion interna}
        const innerNumber = 2;
        console.log(myNumber, myGlobal)

        function child(){
            console.log(innerNumber, myNumber, myGlobal);
        }

        return child();
    }

    return parent();
}
getGlobal();


// testing
function sumWithClosure(firstNum) {

    return function (secondNum) {
      return res = firstNum + secondNum
    }
  }

sumWithClosure(1)(4)
console.log(res)