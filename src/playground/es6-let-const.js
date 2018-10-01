var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//nameConst = 'Guther';
console.log('nameConst', nameConst);

const multiplier = {
    numbers: [1,2,3,4,5],
    multipliBy: 5,
    multiply() {
        return this.numbers.map((number)=>number*this.multipliBy);
    }
}
console.log(multiplier.multiply());