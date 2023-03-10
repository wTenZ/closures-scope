//moneyBoss
function moneyBoss(){
    let saveMoney = 0;
    function countCoins(coins){
        saveMoney += coins;
        console.log(`money: ${saveMoney}`)
    }
    return countCoins;
}
myMoneyBoss = moneyBoss();
myMoneyBoss(1);
myMoneyBoss(4);
myMoneyBoss(5);

anaMoneyBoss = moneyBoss();
anaMoneyBoss(121);
anaMoneyBoss(424);
anaMoneyBoss(255);



//task List
function taskList(task){
    let saveTasks= [];
    saveTasks.push(task);
    for(let tasks of saveTasks){
        console.log(`task: ${tasks}`)
    }
}

taskList('task1');
taskList('task2');



//register pet
function createPetList() {
    const savePet = [];
    
    return function registerPet(pet) {
        if(pet){
            savePet.push(pet);
        }
        return savePet;
    }
}

const myPetList = createPetList();

myPetList("michi");
myPetList("firulais");
myPetList();

console.log(myPetList());