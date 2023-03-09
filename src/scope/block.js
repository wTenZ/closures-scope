function dFruits(){
  if(true){
    var fruit1 = 'nika';  //function scope
    let fruit2 = 'mizu';  //block scope
    const fruit3 = 'pika';  //block scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);

}

dFruits()