'use strict'; //strict mode (you cant compile if you dont declare the function)
pi = 3.1406;
console.log(pi);



// con el modo estricto si o sí necesitas declarar la variabe antes de inicializarla
function strict(){
    'use strict';
    return pi = 3.1416;
}

//esto mostraría un error ya que pi no fue declarada
console.log(strict())
