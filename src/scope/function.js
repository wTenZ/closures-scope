//function scope

function greeting(){
    let userName = 'oz';
    console.log(userName);

    if (userName === 'oz'){
        console.log(`hello ${userName}!`)
    }
}

greeting();
console.log(userName);