// const person = {
//     name: "Hong",
//     age: 19,
// }

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`나의 이름은 ${this.name}이고 나이는 ${this.age}입니다.`);
    }
    goodbye() {
        console.log(`잘가세요. ${this.name}님`);
    }
}

module.exports = Person;