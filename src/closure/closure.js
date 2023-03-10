function greetings(){
   let username = 'TenZ';

   function displayUsername (){
    return `hello ${username}`
   }
   return displayUsername;
}
const g = greetings();
//console.log(g)
console.log(g())