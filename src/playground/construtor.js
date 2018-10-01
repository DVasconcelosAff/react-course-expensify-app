class Person {
    constructor(name = 'Anonymous', age = '0') {
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `${this.name} is ${this.age} years old.`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}
class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}
class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGretting(){
        let description = super.getDescription();

        if(this.hasHomeLocation()){
            description += `I' m visiting from ${this.homeLocation}`;
        }
    }

}
const me = new Student('Diogo Vasconcelos',24,'Computer Science');
console.log(me.getDescription());

const other = new Traveler('Joao',23, 'Lisboa');
console.log(other.getGretting());