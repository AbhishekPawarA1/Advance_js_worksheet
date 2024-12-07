// Write a constructor function to create a Person object with a method that logs the name using this.

// Input: new Person("Alice")
// Expected Output: My name is Alice

function Person(name) {
    this.name = name;
    this.sayhello = function () {
        console.log(`My name is ${this.name}`);
    }
}

let result = new Person("Abhishek")
result.sayhello()