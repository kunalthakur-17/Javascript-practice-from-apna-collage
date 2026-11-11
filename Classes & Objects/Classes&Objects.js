let student = {
    name: "Kunal",
    age: 27,

    greet: function() {
        console.log(this.name);
        console.log(this.age);
    }
};

student.greet();

console.log(student)

console.log(typeof null);
console.log(typeof []);
console.log(typeof NaN);
console.log([] == false);

let x = 10;

function test() {
    let x = 20;

    if (true) {
        let x = 30;
        console.log(x);
    }

    console.log(x);
}

test();
console.log(x);
let user = {
    name: "Kunal",
    details: {
        age: 27
    }
};

let copy = { ...user };

copy.details.age = 30;

console.log(user.details.age);
console.log(copy.details.age);