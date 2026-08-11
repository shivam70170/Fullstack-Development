let arr = [2,3,4];
arr.sayhello = () => {
    console.log("its an array");
}

// constructors 

function person(name,age) {
    this.name = name;
    this.age = age;
}

person.prototype.talk = function(){
    console.log(`hi,i'm  ${this.name}` );
}

let p1 = new person("adam",25);
let p2 = new person("eve",24);


// ## classes

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi i'm ${this.name}`);
    }
}

let p3 = new Person("raghav",46);
let p4 = new Person("shyam",27);


// ## inheritance

class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks = marks;
    }
    greet(){
        return "hello";
    }
}

let p5 = new Student("shivam",21,97);