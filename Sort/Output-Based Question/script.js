// Input: [{name: "Alice", age: 25}, {name: "Bob", age: 30}]
// Expected Output: [{"name":"Bob","age":30},{"name":"Alice","age":25}]

Input= [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

let res = Input.sort((a, b) => b.age - a.age)
console.log(res)